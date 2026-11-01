/* ==========================================================================
   Lightbox – ein Bild groß über der Seite anzeigen
   --------------------------------------------------------------------------
   Wird von der Adventsaktion-Seite benutzt und später auch von den Galerien.

   Benutzung aus einem anderen Skript:
     oeffneLightbox(liste, startNummer, ausloeser)
       liste       – Liste von Bildern, jedes so:
                     { bild: "pfad.jpg", alt: "Beschreibung fürs Bild",
                       titel: "Nr. 07", text: "optionaler Text" }
       startNummer – welches Bild zuerst (0 = erstes)
       ausloeser   – das angeklickte Element (dorthin springt der Fokus
                     nach dem Schließen zurück, wichtig für Tastatur-Nutzer)

   Bedienung: Pfeile, Wischen, Pfeiltasten; schließen mit ✕, Escape-Taste
   oder Tippen neben das Bild.

   Technik: Das HTML-Element <dialog> übernimmt vieles von selbst
   (über der Seite liegen, Escape zum Schließen, Tastatur-Fokus).
   ========================================================================== */

let lightboxDialog = null;     // das <dialog>-Element (wird beim ersten Öffnen erzeugt)
let lightboxListe = [];
let lightboxAktuell = 0;
let lightboxAusloeser = null;
let lightboxWischStartX = null;


// Die Lightbox einmalig bauen und in die Seite einfügen
function erstelleLightbox() {
  lightboxDialog = document.createElement("dialog");
  lightboxDialog.className = "lightbox";
  lightboxDialog.setAttribute("aria-label", "Großansicht");

  lightboxDialog.innerHTML =
    '<button class="lightbox-schliessen" type="button" aria-label="Großansicht schließen">' +
    '  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    "</button>" +
    '<figure class="lightbox-inhalt">' +
    '  <img class="lightbox-bild" alt="">' +
    '  <figcaption class="lightbox-beschriftung">' +
    '    <span class="lightbox-titel"></span>' +
    '    <span class="lightbox-text"></span>' +
    '    <span class="lightbox-zaehler"></span>' +
    "  </figcaption>" +
    "</figure>" +
    '<button class="lightbox-pfeil lightbox-zurueck" type="button" aria-label="Vorheriges Bild">' +
    '  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>' +
    "</button>" +
    '<button class="lightbox-pfeil lightbox-weiter" type="button" aria-label="Nächstes Bild">' +
    '  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>' +
    "</button>";

  document.body.appendChild(lightboxDialog);

  // Knöpfe
  lightboxDialog.querySelector(".lightbox-schliessen").addEventListener("click", function () {
    lightboxDialog.close();
  });
  lightboxDialog.querySelector(".lightbox-zurueck").addEventListener("click", function () {
    zeigeLightboxBild(lightboxAktuell - 1);
  });
  lightboxDialog.querySelector(".lightbox-weiter").addEventListener("click", function () {
    zeigeLightboxBild(lightboxAktuell + 1);
  });

  // Tippen auf die leere Fläche neben dem Bild schließt die Lightbox
  lightboxDialog.addEventListener("click", function (ereignis) {
    if (ereignis.target === lightboxDialog) {
      lightboxDialog.close();
    }
  });

  // Pfeiltasten (Escape erledigt <dialog> von selbst)
  lightboxDialog.addEventListener("keydown", function (ereignis) {
    if (ereignis.key === "ArrowRight") {
      zeigeLightboxBild(lightboxAktuell + 1);
    } else if (ereignis.key === "ArrowLeft") {
      zeigeLightboxBild(lightboxAktuell - 1);
    }
  });

  // Wischen am Handy: Startpunkt merken, beim Loslassen Richtung auswerten
  lightboxDialog.addEventListener("touchstart", function (ereignis) {
    lightboxWischStartX = ereignis.touches[0].clientX;
  }, { passive: true });

  lightboxDialog.addEventListener("touchend", function (ereignis) {
    if (lightboxWischStartX === null) return;
    const strecke = ereignis.changedTouches[0].clientX - lightboxWischStartX;
    lightboxWischStartX = null;
    if (strecke < -50) {
      zeigeLightboxBild(lightboxAktuell + 1);   // nach links gewischt: nächstes Bild
    } else if (strecke > 50) {
      zeigeLightboxBild(lightboxAktuell - 1);   // nach rechts gewischt: voriges Bild
    }
  });

  // Beim Schließen: Seite wieder scrollbar machen, Fokus zurück zum Auslöser
  lightboxDialog.addEventListener("close", function () {
    document.documentElement.classList.remove("lightbox-offen");
    if (lightboxAusloeser) {
      lightboxAusloeser.focus();
    }
  });
}


// Ein bestimmtes Bild der Liste anzeigen
function zeigeLightboxBild(index) {
  const anzahl = lightboxListe.length;
  // Nach dem letzten kommt wieder das erste und umgekehrt
  lightboxAktuell = (index + anzahl) % anzahl;
  const eintrag = lightboxListe[lightboxAktuell];

  const bild = lightboxDialog.querySelector(".lightbox-bild");
  bild.src = eintrag.bild;
  bild.alt = eintrag.alt || "";

  lightboxDialog.querySelector(".lightbox-titel").textContent = eintrag.titel || "";
  lightboxDialog.querySelector(".lightbox-text").textContent = eintrag.text || "";
  lightboxDialog.querySelector(".lightbox-zaehler").textContent =
    (lightboxAktuell + 1) + " / " + anzahl;

  // Das nächste Bild schon im Hintergrund laden, damit Blättern flüssig ist
  const naechstes = lightboxListe[(lightboxAktuell + 1) % anzahl];
  new Image().src = naechstes.bild;
}


// Lightbox öffnen (wird von anderen Skripten aufgerufen)
function oeffneLightbox(liste, startNummer, ausloeser) {
  if (!lightboxDialog) {
    erstelleLightbox();
  }
  lightboxListe = liste;
  lightboxAusloeser = ausloeser || null;
  zeigeLightboxBild(startNummer);

  lightboxDialog.showModal();
  // Seite dahinter nicht mitscrollen lassen
  document.documentElement.classList.add("lightbox-offen");
}
