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

      if (eintrag.titel) {
        const titel = document.createElement("span");
        titel.className = "galerie-titel";
        titel.textContent = eintrag.titel;
        markierePlatzhalter(titel, eintrag.titel);
        knopf.appendChild(titel);
      }

      knopf.addEventListener("click", function () {
        oeffneLightbox(lightboxBilder, index, knopf);
      });

      listenpunkt.appendChild(knopf);
      raster.appendChild(listenpunkt);
    });

    abschnitt.appendChild(raster);
    galerieBereich.appendChild(abschnitt);
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
