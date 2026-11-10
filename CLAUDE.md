# Projekt: Das rote Atelier (das-rote-atelier.de)

## Worum es geht
Website, die die Werke meiner Mutter zeigt: Keramik, Skulpturen und Malerei.
Hauptanlass ist **Der helfende Pruttinger Adventskalender**: 24 handgetöpferte
Kerzenhalter in freier Form („24 Loskugeln – 24 Unikate“).

So funktioniert die Aktion:
- Die Kerzenhalter sind tierische Figuren aus Keramik, jede ein Einzelstück.
- Lose (Loskugeln) gibt es bei Nahkauf Wimmer in Prutting zum Benefizpreis von 49 €.
  Hinter jeder Losnummer steckt ein Kerzenhalter, welchen man bekommt, ist Zufall.
- Der Erlös geht an die Pruttinger Dorfstiftung.
- Die Aktion steht in einem Schaufenster. Dort hängt ein QR-Code, über den die
  Leute auf die Website kommen und sehen, was sie bekommen haben bzw. was es gibt.
- Auf der Website wird NICHTS verkauft: kein Shop, kein Bestellformular.
  Der Preis (49 €) steht nur auf der Detailseite des Adventskalenders.
- Vorlage für Texte und Seitenaufbau: `Auswahl Website/Seitenaufbau und Designidee.pptx`

## Besucher
- Fast alle kommen über den QR-Code, also **meistens vom Handy**, oft unterwegs
  mit mobilen Daten. Ein Teil kommt auch am Laptop.
- Daraus folgt: Mobile First, schnelle Ladezeit, das Wichtigste sofort sichtbar
  ohne Scrollen.

## Seitenstruktur
1. **Startseite** (`index.html`)
   - Roter Balken unter der Navigation: „Der helfende Pruttinger Adventskalender“
     (in `css/advent.css`, nach der Aktion entfernbar)
   - Ganz oben, sofort sichtbar: Slideshow der 24 Kerzenhalter, daneben Text,
     Logos (Dorfstiftung, Nahkauf) und „Mehr Infos“
   - Losnummern 1–24 als rote Felder, Klick öffnet den Kerzenhalter groß
   - „Aus meinem Atelier:“ Kacheln (Petersburger Hängung) zu den Werkreihen und „Danke“
2. **Der helfende Adventskalender** (`adventsaktion.html`): So funktioniert's,
   Preis, Freude garantiert, Warum?, alle 24 Kerzenhalter als Raster mit Lightbox
3. **Skulptur** (`skulpturen.html`): Standhaft, Kerberus Kumpanen, Zwiegespräche, Tierisch hell
4. **Keramische Objekte** (`keramik.html`): Rauchbrand, Skulpturale Gefäße, Von Herzen
5. **Malerei** (`malerei.html`): Schichten in Acryl und Wachs, Stille Ferne,
   Blüten abstrakt, Farbreihen
6. **Über mich** (`ueber-mich.html`): Text, Foto der Künstlerin, Frühwerk
7. **Danke** (`danke.html`): Dank an Wegbegleiter (Startseiten-Kachel und Footer)
8. **Kontakt** (`kontakt.html`): im Footer und über das Brief-Symbol oben rechts
9. **Impressum** und **Datenschutz** (im Footer verlinkt)

## Navigation
- Oben: Menü links, Logo mittig, Instagram und Brief-Symbol (→ Kontakt) rechts
- Menü: Adventskalender, Skulptur, Keramische Objekte, Malerei, Über mich
- Auf dem Handy: Hamburger-Menü
- Menüpunkt „Adventskalender“ hervorgehoben (Atelierrot)

## Design
- Stil: warm, handgemacht, ruhig, viel Weißraum. Die Werke stehen im Mittelpunkt.
- Dezent adventlich, nicht kitschig. Die Adventsgestaltung soll sich nach der
  Aktion leicht entfernen lassen.
- Farben (als CSS-Variablen zentral anlegen):
  - Atelierrot `#A62316`: Akzente, Links, hervorgehobene Elemente, Nummern
  - Anthrazit `#4A4340`: Text, Navigation
  - Papier `#FBFAF3`: Seitenhintergrund
  - Formularfeld `#FFFFFF`: nur für Ausnahmen wie Eingabefelder
- Schriften (über Google Fonts):
  - **Manrope**: Fließtext, Navigation, Überschriften
  - **Fira Code**: gezielte Akzente, z. B. die Nummern der Kerzenhalter („Nr. 07“),
    kleine Beschriftungen
- Große, hochwertige Bilder; Bilder in Galerien per Klick vergrößerbar (Lightbox)
- Auf ausreichenden Kontrast achten (gut lesbar auch draußen am Handy)

## Technik
- Reines HTML, CSS und JavaScript, keine Frameworks
- Mobile First, funktioniert auch gut am Laptop
- Slideshow: automatisch weiterlaufend, mit Pfeilen und Wischen bedienbar,
  pausiert bei Berührung/Hover
- Die Daten der 24 Kerzenhalter (Nummer, Bild, optional kurze Beschreibung) stehen
  zentral in EINER Datei, damit ich sie leicht selbst ändern kann
- Bilder optimiert (komprimiert, moderne Formate, passende Größen, Lazy Loading),
  damit die Seite auch mit mobilen Daten schnell lädt
- Bilder liegen in `bilder/` mit Unterordnern: `kerzenhalter/`, `keramik/`,
  `skulpturen/`, `malerei/` (darin je ein Ordner pro Werkreihe), außerdem
  `startseite/`, `ueber-mich/`, `danke/`, `partner/`, `logo/`
- Galerien (Werkreihen, Texte, Bilder) stehen zentral in `js/galerie-daten.js`
- Dateinamen Kerzenhalter: `kerzenhalter-01.jpg` bis `kerzenhalter-24.jpg`

## Arbeitsweise
- Vor größeren Änderungen kurz den Plan zeigen
- Nur ändern, worum ich bitte; den Rest unverändert lassen
- Code verständlich kommentieren (auf Deutsch), ich bin Einsteiger
- Alle Texte auf der Website auf Deutsch
