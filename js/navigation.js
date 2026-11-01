/* ==========================================================================
   Navigation – Hamburger-Menü am Handy
   --------------------------------------------------------------------------
   Tippt man auf den Knopf (☰), klappt das Menü auf oder zu.
   Am Laptop ist das Menü immer sichtbar, dort tut dieses Skript nichts.
   ========================================================================== */

// Knopf und Menü auf der Seite suchen
const menueKnopf = document.querySelector(".menue-knopf");
const hauptmenue = document.querySelector(".hauptmenue");

// Menü öffnen oder schließen
function setzeMenue(offen) {
  hauptmenue.classList.toggle("ist-offen", offen);
  // "aria-expanded" sagt Screenreadern, ob das Menü offen ist,
  // und lässt per CSS die drei Striche zum X werden
  menueKnopf.setAttribute("aria-expanded", offen);
  menueKnopf.setAttribute("aria-label", offen ? "Menü schließen" : "Menü öffnen");
}

if (menueKnopf && hauptmenue) {
  // Tippen auf den Knopf: Menü umschalten
  menueKnopf.addEventListener("click", function () {
    const istOffen = menueKnopf.getAttribute("aria-expanded") === "true";
    setzeMenue(!istOffen);
  });

  // Escape-Taste schließt das Menü (für Tastatur-Nutzer)
  document.addEventListener("keydown", function (ereignis) {
    if (ereignis.key === "Escape") {
      setzeMenue(false);
    }
  });

  // Tippen irgendwo außerhalb von Menü und Knopf schließt das Menü
  document.addEventListener("click", function (ereignis) {
    const imMenue = hauptmenue.contains(ereignis.target);
    const aufKnopf = menueKnopf.contains(ereignis.target);
    if (!imMenue && !aufKnopf) {
      setzeMenue(false);
    }
  });
}
