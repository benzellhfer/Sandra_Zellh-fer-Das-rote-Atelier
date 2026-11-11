/* ==========================================================================
   Galerie (Seiten Keramik, Skulpturen, Malerei)
   --------------------------------------------------------------------------
   Sucht auf der Seite ein Element wie  <div class="galerie" data-galerie="keramik">
   und baut darin aus der Liste in js/galerie-daten.js die Werkreihen mit
   ihren Bildern. Ein Klick öffnet das Bild groß (Lightbox, js/lightbox.js).

   Jede Werkreihe bekommt einen Anker, z. B. #rauchbrand oder
   #schichten-in-acryl – so können Links (wie die Kacheln auf der Startseite)
   direkt zu einer Werkreihe springen.
   ========================================================================== */

const galerieBereich = document.querySelector(".galerie");

// Texte, die noch mit "[PLATZHALTER" beginnen, gelb markieren
function markierePlatzhalter(element, text) {
  if (text.startsWith("[PLATZHALTER")) {
    element.classList.add("platzhalter");
  }
}

// Aus "Schichten in Acryl" wird "schichten-in-acryl" (für den Anker)
function ankerAusName(name) {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")   // alles andere (Leerzeichen usw.) wird zu "-"
    .replace(/^-|-$/g, "");        // "-" am Anfang/Ende entfernen
}

// Seitenverhältnis an einem Bild-Listenpunkt speichern (für JS und CSS)
function setzeVerhaeltnis(listenpunkt, verhaeltnis) {
  listenpunkt.dataset.verhaeltnis = verhaeltnis;
  listenpunkt.style.setProperty("--verhaeltnis", verhaeltnis);
}


/* --------------------------------------------------------------------------
   Petersburger Hängung als geschlossener Block
   --------------------------------------------------------------------------
   Ziel: Jede Werkreihe ist ein sauberes Rechteck – jede Reihe geht über die
   ganze Breite, es gibt keine angefangene letzte Reihe.

   So geht's:
   1. Festlegen, welche Bilder in welche Reihe kommen:
      - Steht in js/galerie-daten.js bei der Werkreihe z. B. reihen: [3, 2],
        dann kommen die ersten 3 Bilder in Reihe 1, die nächsten 2 in Reihe 2.
      - Sonst wird automatisch aufgeteilt: so viele Reihen, wie bei der
        Grundhöhe (--reihenhoehe im CSS) ungefähr passen, und die Bilder so
        verteilt, dass alle Reihen möglichst gleich viel "Bildbreite" haben.
   2. Für jede Reihe ausrechnen, wie hoch sie sein muss, damit ihre Bilder
      (jedes in seinem Format) genau die Breite füllen.
   3. Wäre eine Reihe dadurch sehr hoch (z. B. ein einzelnes Bild), wird sie
      auf das 2,5-Fache der Grundhöhe begrenzt – dann ist sie nicht ganz
      breit, aber kein Bild wird riesig.
   4. Sonderfall "grossLinks: true" (in js/galerie-daten.js): Das erste Bild
      steht links groß über die ganze Höhe, die übrigen Bilder in Reihen
      rechts daneben (bei "reihen" zählen dann nur diese übrigen Bilder).
      Das gilt ab Tablet-Breite; am Handy wäre das große Bild zu schmal,
      dort wird ganz normal in Reihen aufgeteilt.
   -------------------------------------------------------------------------- */
const MAX_REIHENHOEHE_FAKTOR = 2.5;

// Ab welcher Breite das große Bild links steht (wie im CSS: 48rem = Tablet)
const GROSS_LINKS_AB = window.matchMedia("(min-width: 48rem)");

function ordneReihenAn(raster, werkreihe, immer) {
  // Feld-Hängung: Die Anordnung macht hier das CSS (Raster), nichts zu rechnen
  if (werkreihe.feld) return;

  const breite = raster.clientWidth;   // ganze Breite (inkl. Innenabstand links)
  if (breite === 0) return;
  // Nur neu rechnen, wenn sich die Breite wirklich geändert hat
  if (!immer && raster.dataset.letzteBreite === String(breite)) return;
  raster.dataset.letzteBreite = breite;

  // Werte aus dem CSS lesen: Fuge (Abstand) und Grundhöhe einer Reihe.
  // --reihenhoehe steht in rem; 1rem = Schriftgröße des Dokuments.
  const stil = getComputedStyle(raster);
  const fuge = parseFloat(stil.columnGap) || 0;
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const grundhoehe = parseFloat(stil.getPropertyValue("--reihenhoehe")) * rem;

  const punkte = Array.from(raster.children);
  const verhaeltnisse = punkte.map(function (li) { return Number(li.dataset.verhaeltnis) || 1; });
  const vorgabe = werkreihe.reihen;

  // Erst alles vom großen Bild links zurücksetzen (z. B. nach Handy-Drehen)
  raster.style.paddingLeft = "";
  const erstes = punkte[0];
  ["position", "left", "top", "width", "height"].forEach(function (eigenschaft) {
    erstes.style[eigenschaft] = "";
  });

  // ---- Sonderfall: großes Bild links ----
  if (werkreihe.grossLinks && GROSS_LINKS_AB.matches && punkte.length > 2) {
    const restPunkte = punkte.slice(1);
    const restVerh = verhaeltnisse.slice(1);
    const v0 = verhaeltnisse[0];

    // Reihen rechts festlegen (Vorgabe oder automatisch, grob geschätzt
    // mit etwa 70 % der Breite für die rechte Seite)
    const summeVorgabe = (vorgabe || []).reduce(function (a, b) { return a + b; }, 0);
    const proReihe = (vorgabe && summeVorgabe === restPunkte.length)
      ? vorgabe
      : teileAuf(restVerh, breite * 0.7, grundhoehe, fuge);

    // Rechnen: Wie breit muss die rechte Seite (R) sein, damit das große
    // Bild links genau so hoch ist wie alle Reihen rechts zusammen?
    // Höhe einer Reihe = (R - Fugen) ÷ Summe der Verhältnisse
    // → Gesamthöhe rechts = a·R + b, Breite links = v0 · Gesamthöhe,
    //   und links + Fuge + rechts = ganze Breite.
    let a = 0, b = fuge * (proReihe.length - 1), i = 0;
    proReihe.forEach(function (anzahl) {
      const summe = restVerh.slice(i, i + anzahl).reduce(function (x, y) { return x + y; }, 0);
      a += 1 / summe;
      b -= fuge * (anzahl - 1) / summe;
      i += anzahl;
    });
    const rechts = (breite - fuge - v0 * b) / (1 + v0 * a);
    const hoeheGesamt = a * rechts + b;
    const links = v0 * hoeheGesamt;

    // Großes Bild links fest platzieren, rechts davon Platz lassen
    raster.style.paddingLeft = (links + fuge) + "px";
    erstes.style.position = "absolute";
    erstes.style.left = "0";
    erstes.style.top = "0";
    erstes.style.width = links + "px";
    erstes.style.height = hoeheGesamt + "px";
    erstes.style.flex = "";
    erstes.style.marginRight = "";

    setzeReihen(restPunkte, restVerh, proReihe, breite - links - fuge, fuge, Infinity);
    return;
  }

  // ---- Normalfall: alle Bilder in Reihen ----
  const summeVorgabe = (vorgabe || []).reduce(function (x, y) { return x + y; }, 0);
  const proReihe = (vorgabe && summeVorgabe === punkte.length)
    ? vorgabe
    : teileAuf(verhaeltnisse, breite, grundhoehe, fuge);
  setzeReihen(punkte, verhaeltnisse, proReihe, breite, fuge, grundhoehe * MAX_REIHENHOEHE_FAKTOR);
}

// Breiten setzen, Reihe für Reihe (Schritte 2 und 3 oben)
function setzeReihen(punkte, verhaeltnisse, proReihe, breite, fuge, maxHoehe) {
  let i = 0;
  proReihe.forEach(function (anzahl) {
    const reihe = verhaeltnisse.slice(i, i + anzahl);
    const summe = reihe.reduce(function (a, b) { return a + b; }, 0);
    let hoehe = (breite - fuge * (anzahl - 1)) / summe;
    const begrenzt = hoehe > maxHoehe;
    if (begrenzt) hoehe = maxHoehe;

    reihe.forEach(function (verhaeltnis, j) {
      const li = punkte[i + j];
      const bildBreite = verhaeltnis * hoehe;
      if (begrenzt) {
        // Feste Breite, nicht wachsen
        li.style.flex = "0 0 " + bildBreite + "px";
      } else {
        // Grundbreite 1 Pixel knapper, dann wachsen alle Bilder der Reihe
        // im gleichen Verhältnis, bis die Reihe exakt voll ist. (Das Knappe
        // verhindert, dass Rundungsfehler ein Bild in die nächste Reihe schieben.)
        li.style.flex = verhaeltnis + " " + verhaeltnis + " " + (bildBreite - 1) + "px";
      }
      // Bei einer begrenzten (nicht vollen) Reihe den Rest der Zeile mit
      // Außenabstand füllen, damit die nächste Reihe sicher darunter beginnt
      const istLetztes = j === anzahl - 1;
      const rest = breite - (summe * hoehe + fuge * (anzahl - 1));
      li.style.marginRight = begrenzt && istLetztes ? (rest - 1) + "px" : "";
    });
    i += anzahl;
  });
}

// Automatische Aufteilung: Gibt eine Liste zurück wie [3, 3, 2]
// (= 3 Bilder in Reihe 1, 3 in Reihe 2, 2 in Reihe 3).
function teileAuf(verhaeltnisse, breite, grundhoehe, fuge) {
  const n = verhaeltnisse.length;
  const gesamt = verhaeltnisse.reduce(function (a, b) { return a + b; }, 0);

  // Wie viele Reihen? So viele, wie bei Grundhöhe herauskommen – im Zweifel
  // lieber eine Reihe mehr (dann werden die Bilder größer, nicht kleiner).
  // Die 0.15 verhindert, dass ein winziger Überhang gleich eine Reihe mehr erzwingt.
  let reihen = Math.ceil((gesamt * grundhoehe + fuge * (n - 1)) / breite - 0.15);
  reihen = Math.max(1, Math.min(reihen, n));
  const ziel = gesamt / reihen;   // ideale "Bildbreite" pro Reihe

  // Beste Aufteilung suchen (die Reihenfolge bleibt dabei immer gleich).
  // kosten[k][m] = kleinste Abweichung, wenn die ersten m Bilder auf k Reihen
  // verteilt werden. Bei den paar Bildern pro Werkreihe geht das blitzschnell.
  const kosten = [];
  const schnitt = [];
  for (let k = 0; k <= reihen; k++) {
    kosten.push(new Array(n + 1).fill(Infinity));
    schnitt.push(new Array(n + 1).fill(0));
  }
  kosten[0][0] = 0;
  for (let k = 1; k <= reihen; k++) {
    for (let m = k; m <= n; m++) {
      let summe = 0;
      // Die k-te Reihe enthält die Bilder von s bis m-1
      for (let s = m - 1; s >= k - 1; s--) {
        summe += verhaeltnisse[s];
        const wert = kosten[k - 1][s] + Math.pow(summe - ziel, 2);
        if (wert < kosten[k][m]) {
          kosten[k][m] = wert;
          schnitt[k][m] = s;
        }
      }
    }
  }

  // Ergebnis von hinten nach vorne ablesen
  const proReihe = [];
  let m = n;
  for (let k = reihen; k >= 1; k--) {
    const s = schnitt[k][m];
    proReihe.unshift(m - s);
    m = s;
  }
  return proReihe;
}


if (galerieBereich && typeof GALERIEN !== "undefined") {
  // Welche Galerie? Steht im HTML bei data-galerie="…"
  const werkreihen = GALERIEN[galerieBereich.dataset.galerie] || [];

  werkreihen.forEach(function (werkreihe) {
    const abschnitt = document.createElement("section");
    abschnitt.className = "werkreihe";

    // Name für Beschriftungen: der Werkreihen-Name, oder – wenn leer –
    // die Hauptüberschrift der Seite (z. B. "Malerei")
    const anzeigeName = werkreihe.reihe || document.querySelector("h1").textContent;

    // Überschrift und Anker nur, wenn die Werkreihe einen Namen hat
    if (werkreihe.reihe) {
      abschnitt.id = ankerAusName(werkreihe.reihe);
      const ueberschrift = document.createElement("h2");
      ueberschrift.textContent = werkreihe.reihe;
      abschnitt.appendChild(ueberschrift);
    }

    if (werkreihe.text) {
      const text = document.createElement("p");
      text.className = "werkreihe-text";
      text.textContent = werkreihe.text;
      markierePlatzhalter(text, werkreihe.text);
      abschnitt.appendChild(text);
    }

    // Liste für die Lightbox: man blättert innerhalb der Werkreihe.
    // "titel" bleibt leer (der ist in der Lightbox für Nummern wie "Nr. 07"
    // gedacht), Werktitel und Werkreihe stehen im normalen Text darunter.
    const lightboxBilder = werkreihe.bilder.map(function (eintrag) {
      return {
        bild: eintrag.bild,
        alt: eintrag.titel || anzeigeName,
        titel: "",
        text: eintrag.titel ? eintrag.titel + " · " + anzeigeName : anzeigeName
      };
    });

    const raster = document.createElement("ul");
    raster.className = "galerie-raster";
    // Feld-Hängung (feld: true): gleichmäßiges Raster, große Bilder über 2×2 Felder
    if (werkreihe.feld) {
      raster.classList.add("galerie-feld");
    }
    let grosseBilder = 0;   // zählt die großen Bilder (gross-1, gross-2, …)

    werkreihe.bilder.forEach(function (eintrag, index) {
      const listenpunkt = document.createElement("li");

      const knopf = document.createElement("button");
      knopf.type = "button";
      knopf.className = "galerie-knopf";
      knopf.setAttribute("aria-label",
        (eintrag.titel || anzeigeName + ", Bild " + (index + 1)) + " – groß anzeigen");

      const bild = document.createElement("img");
      bild.src = eintrag.bild;
      bild.alt = "";             // Beschriftung steht im aria-label des Knopfs
      bild.loading = "lazy";     // erst laden, wenn man hinscrollt
      bild.decoding = "async";
      knopf.appendChild(bild);

      // Seitenverhältnis (Breite ÷ Höhe) merken: Daraus berechnet
      // ordneReihenAn() weiter unten, wie breit das Bild in seiner Reihe wird
      // ("Petersburger Hängung"). Das CSS nutzt es für die Bildform.
      if (eintrag.breite && eintrag.hoehe) {
        setzeVerhaeltnis(listenpunkt, eintrag.breite / eintrag.hoehe);
      } else {
        // Keine Maße in der Datei: vorerst quadratisch annehmen,
        // nach dem Laden selbst messen und neu anordnen
        setzeVerhaeltnis(listenpunkt, 1);
        bild.addEventListener("load", function () {
          setzeVerhaeltnis(listenpunkt, bild.naturalWidth / bild.naturalHeight);
          ordneReihenAn(raster, werkreihe, true);
        });
      }

      // Werktitel stehen nicht unter dem Bild (damit die Bilder dicht
      // an dicht hängen), sondern in der Großansicht (Lightbox)

      knopf.addEventListener("click", function () {
        oeffneLightbox(lightboxBilder, index, knopf);
      });

      // Großes Bild in der Feld-Hängung: Klassen für die Position im CSS
      if (werkreihe.feld && eintrag.gross) {
        grosseBilder += 1;
        listenpunkt.classList.add("gross", "gross-" + grosseBilder);
      }

      listenpunkt.appendChild(knopf);
      raster.appendChild(listenpunkt);
    });

    abschnitt.appendChild(raster);

    // Neben der vorigen Werkreihe anzeigen? (nebenVoriger: true in den Daten)
    // Dann kommen beide in einen gemeinsamen Kasten "werkreihen-paar", der
    // sie ab Tablet-Breite nebeneinander stellt (siehe css/style.css).
    const vorige = galerieBereich.lastElementChild;
    if (werkreihe.nebenVoriger && vorige) {
      let paar = vorige;
      if (!vorige.classList.contains("werkreihen-paar")) {
        paar = document.createElement("div");
        paar.className = "werkreihen-paar";
        galerieBereich.replaceChild(paar, vorige);
        paar.appendChild(vorige);
      }
      paar.appendChild(abschnitt);
    } else {
      galerieBereich.appendChild(abschnitt);
    }

    // Anteil an der Breite, falls die Werkreihe neben einer anderen steht:
    // die Summe der Seitenverhältnisse ihrer Bilder. So werden die Bilder
    // in beiden Werkreihen gleich hoch.
    const anteil = werkreihe.bilder.reduce(function (summe, eintrag) {
      return summe + (eintrag.breite && eintrag.hoehe ? eintrag.breite / eintrag.hoehe : 1);
    }, 0);
    abschnitt.style.setProperty("--anteil", anteil);

    // Bilder in Reihen anordnen – und neu, sobald sich die Breite ändert
    // (Handy drehen, Fenster größer/kleiner ziehen)
    ordneReihenAn(raster, werkreihe, true);
    if ("ResizeObserver" in window) {
      new ResizeObserver(function () {
        ordneReihenAn(raster, werkreihe, false);
      }).observe(raster);
    }
  });

  // Kam man über einen Link mit Anker (z. B. keramik.html#rauchbrand),
  // jetzt dorthin springen – die Werkreihe gibt es ja erst ab jetzt
  if (location.hash) {
    const ziel = document.getElementById(location.hash.slice(1));
    if (ziel) {
      ziel.scrollIntoView();
    }
  }
}
