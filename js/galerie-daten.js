/* ==========================================================================
   GALERIEN – deine Datei zum Bearbeiten
   --------------------------------------------------------------------------
   Hier stehen alle Bilder der Seiten Keramik, Skulpturen und Malerei.
   Jede Seite ist in Werkreihen unterteilt (z. B. "Rauchbrand").

   Aufbau einer Werkreihe:
     {
       reihe: "Name der Werkreihe",        ← wird als Überschrift angezeigt
                                             (leer lassen "" = keine Überschrift)
       text: "",                           ← optional: kurzer Text unter der Überschrift
       bilder: [
         { bild: "bilder/…/datei.jpg", titel: "" },
         …
       ]
     },

   Pro Bild:
     bild   – Pfad zum Foto. Die Bilder liegen in bilder/keramik/,
              bilder/skulpturen/ und bilder/malerei/, jeweils mit einem
              Unterordner pro Werkreihe. Der Pfad muss genau stimmen
              (auf Groß-/Kleinschreibung achten!).
     titel  – optional: Titel des Werks, z. B. "Liegender Hund, 2024".
              Leer lassen ("") wenn es keinen Titel geben soll.
              Der Titel erscheint in der Großansicht (Lightbox).
     breite, hoehe – optional: Größe des Bildes in Pixeln (im Finder:
              Bild auswählen, Cmd+I, "Weitere Informationen" → "Abmessungen").
              Damit steht die Anordnung sofort richtig. Lässt du beides weg,
              misst die Seite das Bild beim Laden selbst – dann kann die
              Anordnung beim Laden kurz springen.

   Die Reihenfolge hier ist die Reihenfolge auf der Seite.
   Neues Bild hinzufügen: eine Zeile { bild: …, titel: …, breite: …, hoehe: … }
   kopieren, Pfad und Maße ändern.
   Neue Werkreihe: einen ganzen { reihe: … } Block kopieren.

   Wichtig beim Bearbeiten:
     - Texte immer zwischen "Anführungszeichen"
     - Nach jeder Zeile bzw. jedem Block ein Komma
   ========================================================================== */

const GALERIEN = {

  // ---------------------------------------------------------------- KERAMIK
  keramik: [
    {
      reihe: "Rauchbrand",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Rauchbrand]",
      bilder: [
        { bild: "bilder/keramik/rauchbrand/schale-kupferoxyd.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/keramik/rauchbrand/schale-schwarz-weiss.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/keramik/rauchbrand/skulptur-ring.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/keramik/rauchbrand/schale-eisenoxyd.jpg", titel: "", breite: 640, hoehe: 426 },
        { bild: "bilder/keramik/rauchbrand/schale-natur.jpg", titel: "", breite: 640, hoehe: 426 },
        { bild: "bilder/keramik/rauchbrand/zwei-schalen.jpg", titel: "", breite: 640, hoehe: 426 },
        { bild: "bilder/keramik/rauchbrand/teller.jpg", titel: "", breite: 320, hoehe: 240 },
      ]
    },
    {
      reihe: "Gefäße",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Gefäße]",
      bilder: [
        { bild: "bilder/keramik/gefaesse/schale-skulptural.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/keramik/gefaesse/schale-grau.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/keramik/gefaesse/vase-hoch.jpg", titel: "", breite: 1349, hoehe: 1600 },
        { bild: "bilder/keramik/gefaesse/amphore-salzbrand.jpg", titel: "", breite: 604, hoehe: 604 },
      ]
    },
    {
      reihe: "Dies und Das",
      text: "",
      bilder: [
        { bild: "bilder/keramik/dies-und-das/boot.jpg", titel: "", breite: 2048, hoehe: 1536 },
        { bild: "bilder/keramik/dies-und-das/herzen.jpg", titel: "", breite: 640, hoehe: 426 },
      ]
    },
  ],

  // ------------------------------------------------------------- SKULPTUREN
  skulpturen: [
    {
      reihe: "Figuren",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Figuren]",
      bilder: [
        { bild: "bilder/skulpturen/figuren/schwester.jpg", titel: "", breite: 1536, hoehe: 2048 },
        { bild: "bilder/skulpturen/figuren/bockige-nah.jpg", titel: "", breite: 1066, hoehe: 1600 },
        { bild: "bilder/skulpturen/figuren/bockige.jpg", titel: "", breite: 640, hoehe: 426 },
        { bild: "bilder/skulpturen/figuren/badewanne.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/skulpturen/figuren/zahnarzt.jpg", titel: "", breite: 1369, hoehe: 1600 },
        { bild: "bilder/skulpturen/figuren/kamel.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/skulpturen/figuren/kamel-ganz.jpg", titel: "", breite: 1066, hoehe: 1600 },
      ]
    },
    {
      reihe: "Hunde",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Hunde]",
      bilder: [
        { bild: "bilder/skulpturen/hunde/hund-skulptural-1.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/skulpturen/hunde/zwei-hunde.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/skulpturen/hunde/hund-skulptural-3.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/skulpturen/hunde/hund-skulptural-2.jpg", titel: "", breite: 640, hoehe: 426 },
        { bild: "bilder/skulpturen/hunde/hund-skulptural-6.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/skulpturen/hunde/hund-raku.jpg", titel: "", breite: 1066, hoehe: 1600 },
        { bild: "bilder/skulpturen/hunde/hund-rauchbrand-nah.jpg", titel: "", breite: 1573, hoehe: 1600 },
      ]
    },
    {
      reihe: "Tierskulpturen",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Tierskulpturen]",
      bilder: [
        { bild: "bilder/skulpturen/tierskulpturen/fuchs.jpg", titel: "", breite: 720, hoehe: 540 },
        { bild: "bilder/skulpturen/tierskulpturen/stacheltier.jpg", titel: "", breite: 1600, hoehe: 1472 },
        { bild: "bilder/skulpturen/tierskulpturen/esel-nah.jpg", titel: "", breite: 1549, hoehe: 1600 },
        { bild: "bilder/skulpturen/tierskulpturen/esel.jpg", titel: "", breite: 604, hoehe: 603 },
      ]
    },
  ],

  // ---------------------------------------------------------------- MALEREI
  // Vorerst ohne Werkreihen: reihe ist leer, daher keine Zwischenüberschrift
  malerei: [
    {
      reihe: "",
      text: "",
      bilder: [
        { bild: "bilder/malerei/stier.jpg", titel: "", breite: 960, hoehe: 720 },
      ]
    },
  ],

};
