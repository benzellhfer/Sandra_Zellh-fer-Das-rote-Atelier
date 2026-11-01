/* ==========================================================================
   GALERIEN – deine Datei zum Bearbeiten
   --------------------------------------------------------------------------
   Hier stehen alle Bilder der Seiten Keramik, Skulpturen und Malerei.
   Jede Seite ist in Werkreihen unterteilt (z. B. "Rauchbrand").

   Aufbau einer Werkreihe:
     {
       reihe: "Name der Werkreihe",        ← wird als Überschrift angezeigt
       text: "",                           ← optional: kurzer Text unter der Überschrift
       bilder: [
         { bild: "bilder/…/datei.jpg", titel: "" },
         …
       ]
     },

   Pro Bild:
     bild   – Pfad zum Foto. Ablegen kannst du es in einem beliebigen Ordner
              unter bilder/, der Pfad muss nur genau stimmen
              (auf Groß-/Kleinschreibung achten!).
     titel  – optional: Titel des Werks, z. B. "Liegender Hund, 2024".
              Leer lassen ("") wenn es keinen Titel geben soll.

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
        { bild: "bilder/keramik/rauchbrand/rauchbrand-01.jpg", titel: "[PLATZHALTER: Titel des Werks]" },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-02.jpg", titel: "" },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-03.jpg", titel: "" },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-04.jpg", titel: "" },
      ]
    },
  ],

  // ------------------------------------------------------------- SKULPTUREN
  skulpturen: [
    {
      reihe: "Tierskulptur",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Tierskulptur]",
      bilder: [
        { bild: "bilder/skulpturen/tierskulptur/tierskulptur-01.jpg", titel: "" },
        { bild: "bilder/skulpturen/tierskulptur/tierskulptur-02.jpg", titel: "" },
        { bild: "bilder/skulpturen/tierskulptur/tierskulptur-03.jpg", titel: "" },
        { bild: "bilder/skulpturen/tierskulptur/tierskulptur-04.jpg", titel: "" },
      ]
    },
    {
      reihe: "Hunde",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Hunde]",
      bilder: [
        { bild: "bilder/skulpturen/hunde/hunde-01.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/hunde-02.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/hunde-03.jpg", titel: "" },
        { bild: "bilder/skulpturen/hunde/hunde-04.jpg", titel: "" },
      ]
    },
  ],

  // ---------------------------------------------------------------- MALEREI
  malerei: [
    {
      reihe: "Schichten in Acryl",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Schichten in Acryl]",
      bilder: [
        { bild: "bilder/malerei/schichten-in-acryl/schichten-in-acryl-01.jpg", titel: "" },
        { bild: "bilder/malerei/schichten-in-acryl/schichten-in-acryl-02.jpg", titel: "" },
        { bild: "bilder/malerei/schichten-in-acryl/schichten-in-acryl-03.jpg", titel: "" },
        { bild: "bilder/malerei/schichten-in-acryl/schichten-in-acryl-04.jpg", titel: "" },
      ]
    },
    {
      reihe: "Zwiesprache",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Zwiesprache]",
      bilder: [
        { bild: "bilder/malerei/zwiesprache/zwiesprache-01.jpg", titel: "" },
        { bild: "bilder/malerei/zwiesprache/zwiesprache-02.jpg", titel: "" },
        { bild: "bilder/malerei/zwiesprache/zwiesprache-03.jpg", titel: "" },
        { bild: "bilder/malerei/zwiesprache/zwiesprache-04.jpg", titel: "" },
      ]
    },
  ],

};
