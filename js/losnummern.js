/* ==========================================================================
   Losnummern 1–24 (Startseite)
   --------------------------------------------------------------------------
   Baut aus der Liste in js/kerzenhalter-daten.js 24 rote Felder mit den
   Losnummern. Ein Klick öffnet den passenden Kerzenhalter groß
   (Lightbox, siehe js/lightbox.js) – so sieht man sofort, welches Tier
   zur eigenen Losnummer gehört. In der Großansicht kann man weiterblättern.
   ========================================================================== */

const losnummernRaster = document.querySelector(".losnummern-raster");

if (losnummernRaster && typeof KERZENHALTER !== "undefined") {

  // Die Liste so umbauen, wie die Lightbox sie braucht
  const losnummernBilder = KERZENHALTER.map(function (kerzenhalter) {
    return {
      bild: kerzenhalter.bild,
      alt: "Kerzenhalter Nr. " + kerzenhalter.nummer,
      titel: "Nr. " + kerzenhalter.nummer,
      text: kerzenhalter.beschreibung
    };
  });

  KERZENHALTER.forEach(function (kerzenhalter, index) {
    const eintrag = document.createElement("li");

    const knopf = document.createElement("button");
    knopf.type = "button";
    knopf.className = "losnummer";
    // Auf dem Feld steht die Nummer ohne führende Null: "7" statt "07"
    knopf.textContent = String(Number(kerzenhalter.nummer));
    knopf.setAttribute("aria-label", "Losnummer " + Number(kerzenhalter.nummer) + ": Kerzenhalter groß anzeigen");

    knopf.addEventListener("click", function () {
      oeffneLightbox(losnummernBilder, index, knopf);
    });

    eintrag.appendChild(knopf);
    losnummernRaster.appendChild(eintrag);
  });
}
