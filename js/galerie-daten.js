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

   Reihen (optional, pro Werkreihe): Normalerweise verteilt die Seite die
   Bilder selbst auf volle Reihen. Willst du es fest vorgeben, schreibe z. B.
       reihen: [3, 2],
   = die ersten 3 Bilder in Reihe 1, die nächsten 2 in Reihe 2. Die Zahlen
   müssen zusammen genau die Anzahl der Bilder ergeben, sonst wird
   automatisch verteilt. Feste Reihen gelten auch am Handy.

   Nebeneinander (optional): Mit
       nebenVoriger: true,
   steht eine Werkreihe neben der vorigen statt darunter (ab Tablet-Breite;
   am Handy bleiben sie untereinander).

   Großes Bild links (optional): Mit
       grossLinks: true,
   steht das erste Bild groß links über die ganze Höhe der Werkreihe, die
   übrigen in Reihen rechts daneben (ab Tablet-Breite). "reihen" zählt dann
   nur die übrigen Bilder, z. B. reihen: [3, 3].

   Feld-Hängung (optional, für Werkreihen mit lauter Hochformaten): Mit
       feld: true,
   stehen alle Bilder in einem gleichmäßigen Raster; Bilder mit
       gross: true
   (beim einzelnen Bild hinten anhängen) werden doppelt so groß.
   Gedacht für genau 3 große + 15 kleine Bilder (dann geht der Block
   genau auf). Wo die großen Bilder stehen, ist in css/style.css
   festgelegt (Abschnitt "Feld-Hängung").

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
      // Zeilen mit "//" davor werden zurzeit nicht gezeigt (zum Wiederanzeigen "//" löschen)
      bilder: [
        { bild: "bilder/keramik/skulpturale-gefaesse/schiff.jpg", titel: "", breite: 1536, hoehe: 1024 },
        { bild: "bilder/keramik/skulpturale-gefaesse/kugeldose.jpg", titel: "", breite: 1536, hoehe: 1024 },
        // { bild: "bilder/keramik/skulpturale-gefaesse/vase-salzbrand.jpg", titel: "", breite: 604, hoehe: 604 },
        { bild: "bilder/keramik/skulpturale-gefaesse/zacke.jpg", titel: "", breite: 1536, hoehe: 1024 },
        // { bild: "bilder/keramik/skulpturale-gefaesse/gefaess.jpg", titel: "", breite: 1536, hoehe: 1024 },
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
      text: "Tiere, die in sich ruhen und ihren eigenen Ausdruck bewahren. Hochgebrannt und fest stehen sie auf ihren Sockeln und überstehen jedes Wetter.",
      // Esel groß links über die ganze Höhe, rechts daneben 2 Reihen mit je 3 Bildern
      grossLinks: true,
      reihen: [3, 3],
      bilder: [
        { bild: "bilder/skulpturen/standhaft/esel.jpg", titel: "", breite: 1024, hoehe: 1536 },
        // rechts, Reihe 1
        { bild: "bilder/skulpturen/standhaft/hund.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/standhaft/stacheltier.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/standhaft/nilpferd.jpg", titel: "", breite: 1536, hoehe: 1024 },
        // rechts, Reihe 2
        { bild: "bilder/skulpturen/standhaft/tapir-mutter.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/standhaft/tapir-mutter-und-kind.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/standhaft/fuchs.jpg", titel: "", breite: 1536, hoehe: 1024 },
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
      text: "Figuren auf Sockeln: Innehalten im Zwiegespräch. Der Dialog bleibt offen.",
      // Zwei Reihen mit je 3 Bildern
      reihen: [3, 3],
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
      text: "Hier verbinden sich Handwerk und Heiterkeit: Tierfiguren aus hellem Ton tragen bunte Kerzen und bringen das ganze Jahr gute Laune. Im Rahmen des Helfenden Pruttinger Adventskalenders entstanden tierisch-drollige Stücke, die auch nach der Adventszeit Freude machen.",
      // Feld-Hängung: alle Bilder im gleichen Raster, die mit gross: true
      // doppelt so groß (siehe Erklärung oben in dieser Datei)
      feld: true,
      bilder: [
        { bild: "bilder/skulpturen/tierisch-hell/schildkroete.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/baer.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/zwei-dackel.jpg", titel: "", breite: 1024, hoehe: 1536, gross: true },
        { bild: "bilder/skulpturen/tierisch-hell/zwei-elefanten.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/breitmaul.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/hund-pinkelt.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/wildschwein.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/fisch.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/zwei-wale.jpg", titel: "", breite: 1024, hoehe: 1536, gross: true },
        { bild: "bilder/skulpturen/tierisch-hell/kleines-schwein.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/vogelfamilie.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/ziege-und-schwein.jpg", titel: "", breite: 1024, hoehe: 1536 },
        { bild: "bilder/skulpturen/tierisch-hell/schaf-esel-schwein.jpg", titel: "", breite: 1024, hoehe: 1536, gross: true },
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
  malerei: [
    // Zurzeit nicht gezeigt: Zorro (rotes Bild ohne Überschrift).
    // Zum Wiederanzeigen die "//" vor den folgenden 6 Zeilen löschen.
    // {
    //   reihe: "",
    //   text: "",
    //   bilder: [
    //     { bild: "bilder/malerei/zorro.jpg", titel: "", breite: 1536, hoehe: 1024 },
    //   ]
    // },
    {
      reihe: "Abstrakt – Schichten in Acryl und Wachs",
      text: "Schicht für Schicht entstehen Kontraste im Dialog. Serien auf Karton.",
      // Feste Reihen: die ersten 3 Bilder in Reihe 1, die nächsten 2 in Reihe 2
      reihen: [3, 2],
      bilder: [
        // Reihe 1
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/dreier-1.jpg", titel: "", breite: 959, hoehe: 929 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/dreier-2.jpg", titel: "", breite: 963, hoehe: 955 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/dreier-3.jpg", titel: "", breite: 929, hoehe: 921 },
        // Reihe 2
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/gelb-schwarz-paar.jpg", titel: "", breite: 1431, hoehe: 737 },
        { bild: "bilder/malerei/schichten-in-acryl-und-wachs/bunt-paar.jpg", titel: "", breite: 1343, hoehe: 657 },

        // Zurzeit nicht gezeigt. Zum Wiederanzeigen: die beiden "//" am
        // Zeilenanfang löschen UND die Zahlen bei reihen: oben anpassen.
        // { bild: "bilder/malerei/schichten-in-acryl-und-wachs/dreiergruppe.jpg", titel: "", breite: 1536, hoehe: 1024 },
        // { bild: "bilder/malerei/schichten-in-acryl-und-wachs/bunt-1.jpg", titel: "", breite: 1024, hoehe: 1536 },
        // { bild: "bilder/malerei/schichten-in-acryl-und-wachs/bunt-2.jpg", titel: "", breite: 1024, hoehe: 1536 },
        // { bild: "bilder/malerei/schichten-in-acryl-und-wachs/gelb.jpg", titel: "", breite: 1024, hoehe: 1536 },
        // { bild: "bilder/malerei/schichten-in-acryl-und-wachs/schwarz.jpg", titel: "", breite: 1536, hoehe: 1024 },
      ]
    },
    {
      reihe: "Stille Ferne",
      text: "Pinsel, Acryl auf Papier.",
      bilder: [
        { bild: "bilder/malerei/stille-ferne/gewitter.jpg", titel: "", breite: 885, hoehe: 1169 },
        { bild: "bilder/malerei/stille-ferne/irland.jpg", titel: "", breite: 899, hoehe: 1191 },
      ]
    },
    {
      reihe: "Eigenleben",
      text: "Acryl gespachtelt auf Papier.",
      // Neben der vorigen Werkreihe (Stille Ferne) anzeigen statt darunter
      nebenVoriger: true,
      bilder: [
        { bild: "bilder/malerei/blueten-abstrakt/bluete-weiss.jpg", titel: "", breite: 1179, hoehe: 1600 },
        { bild: "bilder/malerei/blueten-abstrakt/bluete-pink.jpg", titel: "", breite: 999, hoehe: 1468 },
      ]
    },
    {
      reihe: "Farbreihen",
      text: "Acryl auf Kerzenwachs – warum nicht noch fröhlicher?",
      bilder: [
        { bild: "bilder/malerei/farbreihen/farbreihe-1.jpg", titel: "", breite: 1413, hoehe: 631 },
        { bild: "bilder/malerei/farbreihen/farbreihe-2.jpg", titel: "", breite: 1367, hoehe: 593 },
        // { bild: "bilder/malerei/farbreihen/farbreihe-3.jpg", titel: "", breite: 1024, hoehe: 1536 },
        // { bild: "bilder/malerei/farbreihen/farbreihe-4.jpg", titel: "", breite: 1024, hoehe: 1536 },
      ]
    },
  ],

};
