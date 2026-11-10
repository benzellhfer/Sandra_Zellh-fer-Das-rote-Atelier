/* ==========================================================================
   GALERIEN – deine Datei zum Bearbeiten
   --------------------------------------------------------------------------
   Hier stehen alle Bilder der Seiten Keramische Objekte, Skulptur und Malerei.
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

  // ---------------------------------------------------- KERAMISCHE OBJEKTE
  // Seite keramik.html – Werkreihen = Unterordner in bilder/keramik/
  keramik: [
    {
      reihe: "Rauchbrand",
      text: "Im offenen Feuer und unter geführtem Sauerstoffentzug entstehen Oberflächen, die sich nie wiederholen.",
      bilder: [
        { bild: "bilder/keramik/rauchbrand/rauchbrand-1.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-2.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-3.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-5.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-6.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-7.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/rauchbrand/rauchbrand-8.jpg", titel: "", breite: 1536, hoehe: 1024 },
      ]
    },
    {
      reihe: "Skulpturale Gefäße",
      text: "Gefäße, die ihre Funktion hinter sich lassen.",
      bilder: [
        { bild: "bilder/keramik/skulpturale-gefaesse/schiff.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/skulpturale-gefaesse/kugeldose.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/skulpturale-gefaesse/vase-salzbrand.jpg", titel: "", breite: 604, hoehe: 604 },
        { bild: "bilder/keramik/skulpturale-gefaesse/zacke.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/skulpturale-gefaesse/gefaess.jpg", titel: "", breite: 1536, hoehe: 1024 },
      ]
    },
    {
      reihe: "Von Herzen",
      text: "Herzlichkeit hat viele Ausdrucksformen – manchmal auch keramische.",
      bilder: [
        { bild: "bilder/keramik/von-herzen/von-herzen-1.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/von-herzen/von-herzen-2.jpg", titel: "", breite: 1280, hoehe: 853 },
        { bild: "bilder/keramik/von-herzen/von-herzen-3.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/von-herzen/von-herzen-4.jpg", titel: "", breite: 1536, hoehe: 1024 },
      ]
    },
  ],

  // -------------------------------------------------------------- SKULPTUR
  // Seite skulpturen.html – Werkreihen = Unterordner in bilder/skulpturen/
  skulpturen: [
    {
      reihe: "Standhaft",
      text: "Ich forme Tiere, die in sich ruhen und dennoch wachsam bleiben. Hochgebrannt und stumm stehen sie auf ihren Sockeln und überstehen jedes Wetter.",
      bilder: [
        { bild: "bilder/skulpturen/standhaft/esel.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/standhaft/nilpferd.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/standhaft/tapir-mutter.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/standhaft/tapir-mutter-und-kind.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/standhaft/fuchs.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/standhaft/hund.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/standhaft/stacheltier.jpg", titel: "", breite: 1024, hoehe: 1536 },
      ]
    },
    {
      reihe: "Kerberus Kumpanen",
      text: "Meine Phantasietiere erinnern an Hunde und tragen die Spuren des Feuers, das sie geprägt hat. Im Rauchbrand und Raku entstehen Oberflächen, die sich nicht planen lassen und jedes Stück zum Unikat machen.",
      bilder: [
        { bild: "bilder/skulpturen/kerberus-kumpanen/hund-raku-1.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/kerberus-kumpanen/hund-raku-3.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/kerberus-kumpanen/hund-raku-2.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/kerberus-kumpanen/hund-raku-4.jpg", titel: "", breite: 1254, hoehe: 1254 },
        { bild: "bilder/skulpturen/kerberus-kumpanen/hund-raku-5.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/kerberus-kumpanen/hund-raku-6.jpg", titel: "", breite: 1536, hoehe: 1024 },
      ]
    },
    {
      reihe: "Zwiegespräche",
      text: "Ich lasse Figuren auf Sockeln innehalten und mit sich selbst oder mit einem Gegenstand sprechen. Die Szenen erzählen nichts zu Ende, damit der Betrachter seine eigene Geschichte findet.",
      bilder: [
        { bild: "bilder/skulpturen/zwiegespraeche/mann-in-wanne.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/zwiegespraeche/dicke-im-badeanzug.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/zwiegespraeche/kamel-hoch.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/zwiegespraeche/frau-auf-stiefel.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/zwiegespraeche/gruppe.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/skulpturen/zwiegespraeche/mann-mit-schnecke.jpg", titel: "", breite: 1024, hoehe: 1536 },
      ]
    },
    {
      reihe: "Tierisch hell",
      text: "Hier verbinden sich Handwerk und Heiterkeit: Tierfiguren aus hellem Ton tragen bunte Kerzen und bringen das ganze Jahr gute Laune. Im Rahmen des Helfenden Adventskalenders entstanden tierisch-drollige Stücke, die auch nach der Adventszeit Freude machen.",
      bilder: [
        { bild: "bilder/skulpturen/tierisch-hell/schildkroete.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/baer.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/zwei-dackel.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/zwei-elefanten.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/breitmaul.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/hund-pinkelt.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/wildschwein.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/fisch.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/zwei-wale.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/kleines-schwein.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/vogelfamilie.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/ziege-und-schwein.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/schaf-esel-schwein.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/hund-schwarz-weiss.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/schwein-fleckig.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/vogel-und-schnecke.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/schwein-schlappohr.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/affe.jpg", titel: "", breite: 1024, hoehe: 1536 },
      ]
    },
  ],

  // ---------------------------------------------------------------- MALEREI
  // Seite malerei.html – Werkreihen = Unterordner in bilder/malerei/.
  // Die erste Reihe hat keinen Namen: Bilder ohne Unterordner, ohne Überschrift.
  malerei: [
    {
      reihe: "",
      text: "",
      bilder: [
        { bild: "bilder/malerei/zorro.jpg", titel: "", breite: 1536, hoehe: 1024 },
      ]
    },
    {
      reihe: "Abstrakt – Schichten in Acryl und Wachs",
      text: "Schicht für Schicht entstehen Kontraste im Dialog. Serie auf Karton.",
      bilder: [
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/dreiergruppe.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/dreier-1.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/dreier-2.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/dreier-3.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/bunt-paar.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/bunt-1.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/bunt-2.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/gelb-schwarz-paar.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/gelb.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/schwarz.jpg", titel: "", breite: 1536, hoehe: 1024 },
      ]
    },
    {
      reihe: "Stille Ferne",
      text: "Pinsel, Acryl auf Papier.",
      bilder: [
        { bild: "bilder/malerei/stille-ferne/gewitter.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/malerei/stille-ferne/irland.jpg", titel: "", breite: 1024, hoehe: 1536 },
      ]
    },
    {
      reihe: "Blüten abstrakt",
      text: "Acryl gespachtelt auf Papier.",
      bilder: [
        { bild: "bilder/malerei/blueten-abstrakt/bluete-weiss.jpg", titel: "", breite: 1179, hoehe: 1600 },
        { bild: "bilder/malerei/blueten-abstrakt/bluete-pink.jpg", titel: "", breite: 999, hoehe: 1468 },
      ]
    },
    {
      reihe: "Farbreihen",
      text: "Acryl auf Kerzenwachs – warum nicht noch fröhlicher?",
      bilder: [
        { bild: "bilder/malerei/farbreihen/farbreihe-1.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/farbreihen/farbreihe-2.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/malerei/farbreihen/farbreihe-3.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/malerei/farbreihen/farbreihe-4.jpg", titel: "", breite: 1024, hoehe: 1536 },
      ]
    },
  ],

};
