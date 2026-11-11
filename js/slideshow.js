/* ==========================================================================
   Slideshow der 24 Kerzenhalter (Startseite)
   --------------------------------------------------------------------------
   Die Bilder kommen aus js/kerzenhalter-daten.js (Liste KERZENHALTER).

   So funktioniert sie:
   - Läuft automatisch alle paar Sekunden weiter (Einstellung unten).
   - Mit der Maus darüber: Pause, solange die Maus darauf ist.
   - Berührt oder bedient man sie (Wischen, Pfeil, Nummer): Sie bleibt stehen,
     damit "dein" Kerzenhalter nicht gleich wieder wegläuft.
     Mit dem Knopf "Abspielen" läuft sie wieder an.
   - Wischen am Handy übernimmt der Browser selbst (horizontales Scrollen
     mit Einrasten, siehe CSS) – das fühlt sich besonders natürlich an.
   - Klick bzw. Antippen auf ein Bild öffnet es groß (Lightbox, js/lightbox.js).
   ========================================================================== */

// ---- Einstellung: Zeit pro Bild in Millisekunden (2000 = 2 Sekunden) ----
const ZEIT_PRO_BILD = 2000;

// ---- Einstellung: Wie lange ein Bild zum Hereingleiten braucht (in Millisekunden) ----
// Größere Zahl = langsamer. Sollte deutlich kleiner sein als ZEIT_PRO_BILD.
const GLEITDAUER = 1000;


const slideshow = document.querySelector(".slideshow");

// Nur ausführen, wenn es auf dieser Seite eine Slideshow und die Daten gibt
if (slideshow && typeof KERZENHALTER !== "undefined") {
  const spur = slideshow.querySelector(".slideshow-spur");
  const knopfZurueck = slideshow.querySelector(".slideshow-pfeil-zurueck");
  const knopfWeiter = slideshow.querySelector(".slideshow-pfeil-weiter");
  const nummernLeiste = slideshow.querySelector(".slideshow-nummern");
  const knopfPause = slideshow.querySelector(".slideshow-pause");

  const anzahl = KERZENHALTER.length;
  let aktuell = 0;          // welches Bild gerade gezeigt wird (0 = erstes)
  let gestoppt = false;     // true, sobald jemand die Slideshow bedient hat
  let mausDarauf = false;   // true, solange die Maus über der Slideshow ist

  // Wer in den Systemeinstellungen "Bewegung reduzieren" eingestellt hat,
  // bekommt keine automatisch laufende Slideshow
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gestoppt = true;
  }


  // Die Liste so umbauen, wie die Lightbox sie braucht (für die Großansicht)
  const slideshowBilder = KERZENHALTER.map(function (kerzenhalter) {
    return {
      bild: kerzenhalter.bild,
      alt: "Kerzenhalter Nr. " + kerzenhalter.nummer,
      titel: "Nr. " + kerzenhalter.nummer,
      text: kerzenhalter.beschreibung
    };
  });


  // ---- 1. Bilder und Nummern-Knöpfe aus der Datenliste erzeugen ----
  KERZENHALTER.forEach(function (kerzenhalter, index) {
    // Ein Bild ("Dia") der Slideshow
    const dia = document.createElement("li");
    dia.className = "dia";
    dia.setAttribute("aria-roledescription", "Bild");
    dia.setAttribute("aria-label", (index + 1) + " von " + anzahl);

    const bild = document.createElement("img");
    bild.src = kerzenhalter.bild;
    bild.alt = "Kerzenhalter Nr. " + kerzenhalter.nummer +
      (kerzenhalter.beschreibung ? ": " + kerzenhalter.beschreibung : "");
    bild.width = 1000;
    bild.height = 1000;
    bild.decoding = "async";
    if (index === 0) {
      // Das erste Bild sofort und bevorzugt laden – es ist als Erstes zu sehen
      bild.fetchPriority = "high";
    } else {
      // Alle anderen erst laden, wenn sie gebraucht werden (spart mobile Daten)
      bild.loading = "lazy";
    }

    // Beschriftung: "Nr. 07" und ggf. die Beschreibung
    const beschriftung = document.createElement("p");
    beschriftung.className = "dia-beschriftung";
    beschriftung.innerHTML = '<span class="dia-nummer">Nr. ' + kerzenhalter.nummer + "</span>";
    if (kerzenhalter.beschreibung) {
      const text = document.createElement("span");
      text.className = "dia-beschreibung";
      text.textContent = kerzenhalter.beschreibung;
      beschriftung.appendChild(text);
    }

    // Das Bild steckt in einem Knopf: Klick/Antippen öffnet es groß.
    // (Ein Knopf ist auch mit der Tastatur bedienbar.)
    // Beim Wischen löst der Browser keinen Klick aus, Wischen bleibt also Wischen.
    const bildKnopf = document.createElement("button");
    bildKnopf.type = "button";
    bildKnopf.className = "dia-knopf";
    bildKnopf.setAttribute("aria-label", "Kerzenhalter Nr. " + kerzenhalter.nummer + " groß anzeigen");
    bildKnopf.appendChild(bild);
    bildKnopf.addEventListener("click", function () {
      stoppen();   // Slideshow anhalten, damit sie nach dem Schließen nicht weggelaufen ist
      if (typeof oeffneLightbox === "function") {
        oeffneLightbox(slideshowBilder, index, bildKnopf);
      }
    });

    dia.appendChild(bildKnopf);
    dia.appendChild(beschriftung);
    spur.appendChild(dia);

    // Nummern-Knopf zum direkten Springen – nur, wenn es im HTML eine
    // Nummernleiste in der Slideshow gibt (auf der Startseite stehen die
    // Losnummern inzwischen darunter, siehe js/losnummern.js)
    if (nummernLeiste) {
      const knopf = document.createElement("button");
      knopf.type = "button";
      knopf.className = "slideshow-nummer";
      knopf.textContent = kerzenhalter.nummer;
      knopf.setAttribute("aria-label", "Kerzenhalter Nr. " + kerzenhalter.nummer + " zeigen");
      knopf.addEventListener("click", function () {
        stoppen();
        geheZu(index);
      });
      nummernLeiste.appendChild(knopf);
    }
  });

  // Gibt es keine Nummernleiste, ist die Liste einfach leer
  const nummernKnoepfe = nummernLeiste ? nummernLeiste.querySelectorAll(".slideshow-nummer") : [];


  // ---- 2. Zu einem bestimmten Bild wechseln ----
  function geheZu(index) {
    // Bei mehr als einem Bild Abstand springen wir direkt (ohne lange Fahrt
    // über viele Bilder), sonst gleiten wir weich hinüber
    const weich = Math.abs(index - aktuell) === 1;
    const ziel = index * spur.clientWidth;
    if (weich) {
      gleiteZu(ziel);
    } else {
      gleitenAbbrechen();
      spur.scrollTo({ left: ziel, behavior: "auto" });
    }
    markiere(index);
  }

  // Eigene, langsame Gleitbewegung zum Ziel.
  // (Das eingebaute "smooth" des Browsers ist recht schnell und lässt sich
  // nicht einstellen – deshalb bewegen wir die Spur hier selbst, Bild für Bild
  // der Bildschirm-Aktualisierung, über GLEITDAUER Millisekunden.)
  let gleitAnimation = null;   // Nummer der laufenden Animation (zum Abbrechen)

  function gleiteZu(ziel) {
    gleitenAbbrechen();
    const start = spur.scrollLeft;
    const strecke = ziel - start;
    const startZeit = performance.now();

    // Das Einrasten (scroll-snap) während der Fahrt ausschalten,
    // sonst "springt" Safari bei jedem Schritt zurück
    spur.style.scrollSnapType = "none";

    function schritt(jetzt) {
      // Fortschritt von 0 (Anfang) bis 1 (Ziel erreicht)
      const fortschritt = Math.min((jetzt - startZeit) / GLEITDAUER, 1);
      // Sanft anfahren und sanft abbremsen ("ease-in-out")
      const weichheit = fortschritt < 0.5
        ? 2 * fortschritt * fortschritt
        : 1 - Math.pow(-2 * fortschritt + 2, 2) / 2;
      spur.scrollLeft = start + strecke * weichheit;

      if (fortschritt < 1) {
        gleitAnimation = requestAnimationFrame(schritt);
      } else {
        gleitAnimation = null;
        spur.style.scrollSnapType = "";   // Einrasten wieder einschalten (Wert aus dem CSS)
      }
    }
    gleitAnimation = requestAnimationFrame(schritt);
  }

  // Eine laufende Gleitbewegung sofort beenden (z. B. wenn jemand wischt)
  function gleitenAbbrechen() {
    if (gleitAnimation !== null) {
      cancelAnimationFrame(gleitAnimation);
      gleitAnimation = null;
      spur.style.scrollSnapType = "";
    }
  }

  // Den passenden Nummern-Knopf hervorheben
  function markiere(index) {
    aktuell = index;
    nummernKnoepfe.forEach(function (knopf, i) {
      if (i === index) {
        knopf.setAttribute("aria-current", "true");
      } else {
        knopf.removeAttribute("aria-current");
      }
    });
  }

  function weiter() {
    geheZu((aktuell + 1) % anzahl);              // nach 24 kommt wieder 01
  }

  function zurueck() {
    geheZu((aktuell - 1 + anzahl) % anzahl);     // vor 01 kommt 24
  }

  // Beim Wischen merkt sich die Slideshow, welches Bild gerade zu sehen ist
  let wartenAufScroll = false;
  spur.addEventListener("scroll", function () {
    if (wartenAufScroll) return;
    wartenAufScroll = true;
    // requestAnimationFrame: höchstens einmal pro Bildschirm-Aktualisierung rechnen
    requestAnimationFrame(function () {
      const index = Math.round(spur.scrollLeft / spur.clientWidth);
      if (index !== aktuell && index >= 0 && index < anzahl) {
        markiere(index);
      }
      wartenAufScroll = false;
    });
  });

  // Wenn sich die Fenstergröße ändert (z. B. Handy drehen), Bild wieder ausrichten
  window.addEventListener("resize", function () {
    spur.scrollTo({ left: aktuell * spur.clientWidth, behavior: "auto" });
  });


  // ---- 3. Pfeile und Tastatur ----
  knopfZurueck.addEventListener("click", function () {
    stoppen();
    zurueck();
  });

  knopfWeiter.addEventListener("click", function () {
    stoppen();
    weiter();
  });

  // Pfeiltasten, wenn die Slideshow mit der Tastatur ausgewählt ist
  slideshow.addEventListener("keydown", function (ereignis) {
    if (ereignis.key === "ArrowRight") {
      stoppen();
      weiter();
    } else if (ereignis.key === "ArrowLeft") {
      stoppen();
      zurueck();
    }
  });


  // ---- 4. Automatisch weiterlaufen und Pausen ----

  // Dauerhaft anhalten (nach Berührung oder Bedienung)
  function stoppen() {
    gestoppt = true;
    gleitenAbbrechen();   // eine gerade laufende Fahrt nicht gegen den Finger weiterlaufen lassen
    aktualisierePauseKnopf();
  }

  function aktualisierePauseKnopf() {
    knopfPause.textContent = gestoppt ? "▶ Abspielen" : "❚❚ Pause";
    knopfPause.setAttribute("aria-label",
      gestoppt ? "Slideshow abspielen" : "Slideshow anhalten");
    // Während sie automatisch läuft, sollen Screenreader nicht jeden Wechsel ansagen
    spur.setAttribute("aria-live", gestoppt ? "polite" : "off");
  }

  knopfPause.addEventListener("click", function () {
    gestoppt = !gestoppt;
    aktualisierePauseKnopf();
  });

  // Berührung am Handy (Wischen) oder Trackpad-Wischen am Laptop: anhalten
  spur.addEventListener("touchstart", stoppen, { passive: true });
  spur.addEventListener("wheel", stoppen, { passive: true });

  // Maus darüber: Pause, solange sie darauf ist
  slideshow.addEventListener("mouseenter", function () { mausDarauf = true; });
  slideshow.addEventListener("mouseleave", function () { mausDarauf = false; });

  // Der Takt: alle ZEIT_PRO_BILD Millisekunden prüfen, ob es weitergehen darf
  setInterval(function () {
    // document.hidden: Browser-Tab ist gerade nicht sichtbar
    if (!gestoppt && !mausDarauf && !document.hidden) {
      weiter();
    }
  }, ZEIT_PRO_BILD);


  // ---- Start ----
  markiere(0);
  aktualisierePauseKnopf();
}
