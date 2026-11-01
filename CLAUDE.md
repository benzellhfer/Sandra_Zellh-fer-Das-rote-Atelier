# Projekt: Das rote Atelier (das-rote-atelier.de)

## Worum es geht
Website, die die Werke meiner Mutter zeigt: Keramik, Skulpturen und Malerei.
Hauptanlass ist die **Adventsaktion**: 24 handgetöpferte Kerzenhalter in freier Form.

So funktioniert die Aktion:
- Die Kerzenhalter sind tierische Figuren aus Keramik, jede ein Einzelstück.
- Der Erlös der Aktion geht zu 100 % an einen guten Zweck.
- Die Kerzenhalter sind bereits verkauft. Käufer ziehen einen Zettel, welchen
  Kerzenhalter sie bekommen, ist also Zufall.
- Die Aktion steht in einem Schaufenster. Dort hängt ein QR-Code, über den die
  Leute auf die Website kommen und sehen, was sie bekommen haben bzw. was es gibt.
- Auf der Website wird NICHTS verkauft: kein Shop, keine Preise, kein Bestellformular.

## Besucher
- Fast alle kommen über den QR-Code, also **meistens vom Handy**, oft unterwegs
  mit mobilen Daten. Ein Teil kommt auch am Laptop.
- Daraus folgt: Mobile First, schnelle Ladezeit, das Wichtigste sofort sichtbar
  ohne Scrollen.

## Seitenstruktur
1. **Startseite**
   - Ganz oben, sofort sichtbar: Slideshow der 24 Kerzenhalter
   - Jeder Kerzenhalter mit gut lesbarer Nummer (01–24) und Foto,
     damit Käufer „ihren“ Kerzenhalter wiederfinden
   - Kurzer Satz zur Aktion
   - Darunter kurze Teaser zu Über mich, Keramik, Skulpturen, Malerei
2. **Adventsaktion** (Unterseite): alle 24 Kerzenhalter als Raster,
   Klick auf einen öffnet ihn groß (Lightbox), kurze Erklärung der Aktion
3. **Über mich**: Werdegang, Atelier, Foto der Künstlerin
4. **Keramik**: Galerie
5. **Skulpturen**: Galerie
6. **Malerei**: Galerie
7. **Kontakt**: Kontaktmöglichkeit, Adresse/Atelier
8. **Impressum** und **Datenschutz** (im Footer verlinkt)

## Navigation
- Oben: „Das rote Atelier“ links, Menü rechts
- Auf dem Handy: Hamburger-Menü
- Menüpunkt „Adventsaktion“ hervorgehoben (Atelierrot)

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
  `skulpturen/`, `malerei/`
- Dateinamen Kerzenhalter: `kerzenhalter-01.jpg` bis `kerzenhalter-24.jpg`

## Arbeitsweise
- Vor größeren Änderungen kurz den Plan zeigen
- Nur ändern, worum ich bitte; den Rest unverändert lassen
- Code verständlich kommentieren (auf Deutsch), ich bin Einsteiger
- Alle Texte auf der Website auf Deutsch
