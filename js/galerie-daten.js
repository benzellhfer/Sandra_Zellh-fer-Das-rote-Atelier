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

   Die Reihenfolge hier ist die Reihenfolge auf der Seite.
   Neues Bild hinzufügen: eine Zeile { bild: …, titel: … }, kopieren, Pfad ändern.
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
        { bild: "bilder/keramik/rauchbrand/schale-kupferoxyd.jpg", titel: "" },
        { bild: "bilder/keramik/rauchbrand/schale-schwarz-weiss.jpg", titel: "" },
        { bild: "bilder/keramik/rauchbrand/skulptur-ring.jpg", titel: "" },
        { bild: "bilder/keramik/rauchbrand/schale-eisenoxyd.jpg", titel: "" },
        { bild: "bilder/keramik/rauchbrand/schale-natur.jpg", titel: "" },
        { bild: "bilder/keramik/rauchbrand/zwei-schalen.jpg", titel: "" },
        { bild: "bilder/keramik/rauchbrand/teller.jpg", titel: "" },
      ]
    },
    {
      reihe: "Gefäße",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Gefäße]",
      bilder: [
        { bild: "bilder/keramik/gefaesse/schale-skulptural.jpg", titel: "" },
        { bild: "bilder/keramik/gefaesse/schale-grau.jpg", titel: "" },
        { bild: "bilder/keramik/gefaesse/vase-hoch.jpg", titel: "" },
        { bild: "bilder/keramik/gefaesse/amphore-salzbrand.jpg", titel: "" },
      ]
    },
    {
      reihe: "Dies und Das",
      text: "",
      bilder: [
        { bild: "bilder/keramik/dies-und-das/boot.jpg", titel: "" },
        { bild: "bilder/keramik/dies-und-das/herzen.jpg", titel: "" },
      ]
    },
  ],

  // ------------------------------------------------------------- SKULPTUREN
  skulpturen: [
    {
      reihe: "Figuren",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Figuren]",
      bilder: [
        { bild: "bilder/skulpturen/figuren/schwester.jpg", titel: "" },
        { bild: "bilder/skulpturen/figuren/bockige-nah.jpg", titel: "" },
        { bild: "bilder/skulpturen/figuren/bockige.jpg", titel: "" },
        { bild: "bilder/skulpturen/figuren/badewanne.jpg", titel: "" },
        { bild: "bilder/skulpturen/figuren/zahnarzt.jpg", titel: "" },
        { bild: "bilder/skulpturen/figuren/kamel.jpg", titel: "" },
        { bild: "bilder/skulpturen/figuren/kamel-ganz.jpg", titel: "" },
      ]
    },
    {
      reihe: "Hunde",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Hunde]",
      bilder: [
        { bild: "bilder/skulpturen/hunde/hund-skulptural-1.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/zwei-hunde.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/hund-skulptural-3.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/hund-skulptural-2.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/hund-skulptural-6.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/hund-raku.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/hund-rauchbrand-nah.jpg", titel: "" },
      ]
    },
    {
      reihe: "Tierskulpturen",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Tierskulpturen]",
      bilder: [
        { bild: "bilder/skulpturen/tierskulpturen/fuchs.jpg", titel: "" },
        { bild: "bilder/skulpturen/tierskulpturen/stacheltier.jpg", titel: "" },
        { bild: "bilder/skulpturen/tierskulpturen/esel-nah.jpg", titel: "" },
        { bild: "bilder/skulpturen/tierskulpturen/esel.jpg", titel: "" },
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
        { bild: "bilder/malerei/stier.jpg", titel: "" },
      ]
    },
  ],

};
