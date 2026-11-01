/* ==========================================================================
   Raster der 24 Kerzenhalter (Seite "Adventsaktion")
   --------------------------------------------------------------------------
   Baut aus der Liste in js/kerzenhalter-daten.js ein Raster mit kleinen
   Bildern und Nummern. Ein Klick öffnet den Kerzenhalter groß (Lightbox,
   siehe js/lightbox.js).
   ========================================================================== */

const kerzenhalterRaster = document.querySelector(".kerzenhalter-raster");

if (kerzenhalterRaster && typeof KERZENHALTER !== "undefined") {

  // Die Liste so umbauen, wie die Lightbox sie braucht
  const lightboxBilder = KERZENHALTER.map(function (kerzenhalter) {
    return {
      bild: kerzenhalter.bild,
      alt: "Kerzenhalter Nr. " + kerzenhalter.nummer,
      titel: "Nr. " + kerzenhalter.nummer,
      text: kerzenhalter.beschreibung
    };
  });

  KERZENHALTER.forEach(function (kerzenhalter, index) {
    const eintrag = document.createElement("li");

    // Ein Knopf, damit man ihn auch per Tastatur öffnen kann
    const knopf = document.createElement("button");
    knopf.type = "button";
    knopf.className = "raster-knopf";
    knopf.setAttribute("aria-label", "Kerzenhalter Nr. " + kerzenhalter.nummer + " groß anzeigen");

    const bild = document.createElement("img");
    bild.src = kerzenhalter.bild;
    bild.alt = "";               // die Beschriftung steht schon im aria-label des Knopfs
    bild.width = 1000;
    bild.height = 1000;
    bild.loading = "lazy";       // erst laden, wenn man hinscrollt (spart mobile Daten)
    bild.decoding = "async";

    const nummer = document.createElement("span");
    nummer.className = "raster-nummer";
    nummer.textContent = "Nr. " + kerzenhalter.nummer;

    knopf.appendChild(bild);
    knopf.appendChild(nummer);

    if (kerzenhalter.beschreibung) {
      const text = document.createElement("span");
      text.className = "raster-beschreibung";
      text.textContent = kerzenhalter.beschreibung;
      knopf.appendChild(text);
    }

    knopf.addEventListener("click", function () {
      oeffneLightbox(lightboxBilder, index, knopf);
    });

    eintrag.appendChild(knopf);
    kerzenhalterRaster.appendChild(eintrag);
  });
}
