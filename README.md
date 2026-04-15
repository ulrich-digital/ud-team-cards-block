# UD Block: Team Cards Block

Container- und Karten-Block zur Darstellung von Teammitgliedern mit optionalen Kontaktdaten.

---

## Übersicht

Dieses Plugin stellt zwei Blöcke zur Verfügung:

- **Team Cards (Container)**: Umschliesst mehrere Team Cards und steuert das Layout
- **Team Card (Einzelelement)**: Darstellung einer einzelnen Person mit Bild, Funktion und optionalen Kontaktdaten

Die Blöcke sind kombinierbar und ermöglichen flexible Team-Darstellungen innerhalb von Seiten und Layouts.

---

## Funktionen

- Container-Block für strukturierte Team-Layouts
- Einzelne Team Cards mit:
  - Name und Funktion
  - Bild (inkl. Alt-Text)
  - Optionalen Kontaktdaten (E-Mail, Telefon)
- Optionaler Button pro Karte (z. B. für Profilseite)
- Mehrere Team Cards innerhalb eines Containers möglich
- Responsive Darstellung
- Anchor-Unterstützung für beide Blöcke

---

## Rendering-Kontext

**Team Cards (Container)**
- Verantwortlich für Layout und Gruppierung
- Unterstützt Align (wide / full) sowie Spacing (Margin / Padding)

**Team Card (Einzelblock)**
- Statischer Block mit gespeicherten Attributen
- Rendert Bild, Text und optional Kontaktinformationen direkt im Frontend

---

## Editor

![Screenshot des Blocks im Editor mit Feldern für Name, Funktion, Bild und Kontaktdaten. Inhalte können direkt im Block bearbeitet werden.](assets/editor-team-card.png)

Die Inhalte werden direkt im Block gepflegt:

- Name und Funktion als Textfelder
- Bildauswahl über Mediathek
- Kontaktdaten optional aktivierbar
- Button-Text und Link direkt im Block editierbar

---

## Frontend

![Beispielhafte Darstellung mehrerer Team Cards im Frontend mit Bild, Name, Funktion und optionalen Kontaktdaten.](assets/frontend-team-cards.png)

Die Darstellung erfolgt als strukturierte Kartenansicht innerhalb des Containers. Layout und Styling werden über das Theme bzw. die Block-Styles gesteuert.

---

## Technische Hinweise

- Block-Registrierung erfolgt dynamisch über `block.json` im `src/blocks`-Verzeichnis :contentReference[oaicite:0]{index=0}  
- Zwei getrennte Blöcke:
  - `ud/team-cards` (Container) :contentReference[oaicite:1]{index=1}  
  - `ud/team-card` (Einzelkarte) :contentReference[oaicite:2]{index=2}  
- Attribute der Team Card umfassen u. a. Name, Rolle, Bild sowie optionale Kontaktfelder :contentReference[oaicite:3]{index=3}  
- Plugin lädt zentrale Funktionen über Includes (`helpers.php`, `render.php`, `enqueue.php`) :contentReference[oaicite:4]{index=4}  

---

## Autor

[ulrich.digital gmbh](https://ulrich.digital)

## Lizenz

GPL v2 or later  
https://www.gnu.org/licenses/gpl-2.0.html