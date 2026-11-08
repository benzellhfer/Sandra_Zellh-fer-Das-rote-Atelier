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
        { bild: "bilder/keramik/rauchbrand/ring.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/keramik/rauchbrand/schale-1.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/keramik/rauchbrand/schale-2.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/schale-3.jpg", titel: "", breite: 1600, hoehe: 1066 },
        { bild: "bilder/keramik/rauchbrand/schale-4.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/schale-detail-1.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/schale-detail-2.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/schale-flach.jpg", titel: "", breite: 1536, hoehe: 1024 },
      ]
    },
    {
      reihe: "Gefäße",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Gefäße]",
      bilder: [
        { bild: "bilder/keramik/gefaesse/dose-schwarz.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/keramik/gefaesse/schale-fuesse.jpg", titel: "", breite: 1086, hoehe: 724 },
        { bild: "bilder/keramik/gefaesse/schale-gepunktet.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/keramik/gefaesse/schale-gesprenkelt.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/keramik/gefaesse/schale-gestreift.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/gefaesse/vase-feld.jpg", titel: "", breite: 604, hoehe: 604 },
        { bild: "bilder/keramik/gefaesse/vase-hoch.jpg", titel: "", breite: 1349, hoehe: 1600 },
      ]
    },
    {
      reihe: "Dies und Das",
      text: "",
      bilder: [
        { bild: "bilder/keramik/dies-und-das/boot-1.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/keramik/dies-und-das/boot-2.jpg", titel: "", breite: 2048, hoehe: 1536 },
        { bild: "bilder/keramik/dies-und-das/herzen-anhaenger-1.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/dies-und-das/herzen-anhaenger-2.jpg", titel: "", breite: 1086, hoehe: 724 },
        { bild: "bilder/keramik/dies-und-das/herzen-rauchbrand.jpg", titel: "", breite: 1086, hoehe: 724 },
        { bild: "bilder/keramik/dies-und-das/steine.jpg", titel: "", breite: 640, hoehe: 426 },
      ]
    },
  ],

  // ------------------------------------------------------------- SKULPTUREN
  // Werkreihen = Unterordner in bilder/skulpturen/ (die Ordner "reste" werden nicht gezeigt)
  skulpturen: [
    {
      reihe: "Kerberus Kompanen",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Kerberus Kompanen]",
      bilder: [
        { bild: "bilder/skulpturen/kerberus-kompanen/krakelee-tier-detail.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/kerberus-kompanen/gabel-tier.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/kerberus-kompanen/tier-detail.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/kerberus-kompanen/krakelee-tier.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/kerberus-kompanen/mond-tier.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/kerberus-kompanen/mond-tier-detail.jpg", titel: "", breite: 1254, hoehe: 1254 },
      ]
    },
    {
      reihe: "Tiere",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Tiere]",
      bilder: [
        { bild: "bilder/skulpturen/tiere/zotteltier-1.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/esel-1.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/hund-1.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/hund-2.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/hund-3.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/zotteltier-2.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/tapir-1.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/tapire-paar.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/fuchs.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/tiere/esel-2.jpg", titel: "", breite: 1254, hoehe: 1254 },
        { bild: "bilder/skulpturen/tiere/tier-detail.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/tiere/hund-4.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tiere/tapir-mama.jpg", titel: "", breite: 1024, hoehe: 1536 },
      ]
    },
    {
      reihe: "Zwiegespräche",
      text: "[PLATZHALTER: Kurzer Text zur Werkreihe Zwiegespräche]",
      bilder: [
        { bild: "bilder/skulpturen/zwiegespraeche/sitzender.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/zwiegespraeche/badende-ruecken.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/zwiegespraeche/kamel.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/zwiegespraeche/badende-gruppe-2.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/zwiegespraeche/kamel-sockel.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/zwiegespraeche/badende-gruppe-1.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/zwiegespraeche/badewanne.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/zwiegespraeche/frau-sockel-1.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/zwiegespraeche/maedchen-ziege.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/zwiegespraeche/frau-sockel-2.jpg", titel: "", breite: 1024, hoehe: 1536 },
      ]
    },
  ],

  // ---------------------------------------------------------------- MALEREI
  // Werkreihen = Unterordner in bilder/malerei/.
  // Die erste Reihe hat keinen Namen: Bilder ohne Unterordner, ohne Überschrift.
  malerei: [
    {
      reihe: "",
      text: "",
      bilder: [
        { bild: "bilder/malerei/roter-stier.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/karomuster.jpg", titel: "", breite: 339, hoehe: 508 },
      ]
    },
    {
      reihe: "Schichten in Acryl",
      text: "",
      bilder: [
        { bild: "bilder/malerei/schichten-in-acryl/gelb-schwarz-paar.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/schichten-in-acryl/gelb-schwarz-1.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/malerei/schichten-in-acryl/gelb-schwarz-2.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/schichten-in-acryl/gruen-pink-paar.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/malerei/schichten-in-acryl/gruen-pink-1.jpg", titel: "", breite: 339, hoehe: 508 },
        { bild: "bilder/malerei/schichten-in-acryl/gruen-pink-2.jpg", titel: "", breite: 339, hoehe: 508 },
        { bild: "bilder/malerei/schichten-in-acryl/abstrakt-hell-triptychon.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/malerei/schichten-in-acryl/abstrakt-hell-1.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/malerei/schichten-in-acryl/abstrakt-hell-2.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/malerei/schichten-in-acryl/abstrakt-rosa.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/malerei/schichten-in-acryl/schwarz-weiss.jpg", titel: "", breite: 508, hoehe: 339 },
      ]
    },
    {
      reihe: "Acryl gespachtelt",
      text: "",
      bilder: [
        { bild: "bilder/malerei/acryl-gespachtelt/blueten-1.jpg", titel: "", breite: 1179, hoehe: 1600 },
        { bild: "bilder/malerei/acryl-gespachtelt/blueten-2.jpg", titel: "", breite: 999, hoehe: 1468 },
      ]
    },
    {
      reihe: "Landschaften gespachtelt",
      text: "",
      bilder: [
        { bild: "bilder/malerei/landschaften-gespachtelt/landschaft-wolken.jpg", titel: "", breite: 339, hoehe: 508 },
        { bild: "bilder/malerei/landschaften-gespachtelt/landschaft-haus.jpg", titel: "", breite: 339, hoehe: 508 },
      ]
    },
    {
      reihe: "Kerzen mit Acryl",
      text: "",
      bilder: [
        { bild: "bilder/malerei/kerzen-mit-acryl/kerzen-reihe-1.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/malerei/kerzen-mit-acryl/kerzen-reihe-2.jpg", titel: "", breite: 508, hoehe: 339 },
        { bild: "bilder/malerei/kerzen-mit-acryl/kerzen-glas-1.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/malerei/kerzen-mit-acryl/kerzen-glas-2.jpg", titel: "", breite: 339, hoehe: 508 },
        { bild: "bilder/malerei/kerzen-mit-acryl/kerzen-glas-3.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/malerei/kerzen-mit-acryl/kerzen-eimer.jpg", titel: "", breite: 339, hoehe: 508 },
      ]
    },
  ],

};
