# Decal Studio — Anleitung

**[English version](MANUAL.md)**

Decal Studio ist ein Browser-Werkzeug für Rahmenschutzfolie am Fahrrad. Du zeichnest die Decals direkt auf einen 3D-Rahmen; das Werkzeug wickelt jedes davon verzerrungsfrei ab, ordnet die Teile auf einem Bogen an und exportiert eine SVG für deinen Plotter oder Schneideplotter.

Öffne `index.html` in einem aktuellen Browser (Chrome, Edge, Safari, Firefox). Keine Installation nötig. Deine Arbeit bleibt auf deinem Rechner.

---

## Inhalt

1. [Die Oberfläche](#1-die-oberfläche)
2. [Einen Rahmen laden](#2-einen-rahmen-laden)
3. [In der 3D-Ansicht bewegen](#3-in-der-3d-ansicht-bewegen)
4. [Decals zeichnen](#4-decals-zeichnen)
5. [Punkte bearbeiten](#5-punkte-bearbeiten)
6. [Verschieben, Drehen, Skalieren](#6-verschieben-drehen-skalieren)
7. [Spiegelmodus](#7-spiegelmodus)
8. [Messer](#8-messer)
9. [Decals kombinieren](#9-decals-kombinieren)
10. [SVG-Grafik importieren](#10-svg-grafik-importieren)
11. [Die Decal-Liste](#11-die-decal-liste)
12. [Bogen und Export](#12-bogen-und-export)
13. [Projekte speichern](#13-projekte-speichern)
14. [Panels und Sprache](#14-panels-und-sprache)
15. [Tastenkürzel](#15-tastenkürzel)
16. [Tipps und Problemlösung](#16-tipps-und-problemlösung)

---

## 1. Die Oberfläche

- **Obere Leiste** — Sprache (EN | DE), *Rahmen aus Geometrie*, Modelleinheit und die Dateischaltflächen *Neu*, *Öffnen*, *SVG importieren*, *Speichern*.
- **Werkzeuge** (links) — *Zeichnen*, *Bearbeiten*, *Messer*.
- **Werkzeugoptionen** (oben) — Rückgängig/Wiederholen und die Optionen des aktuellen Werkzeugs, dazu *Spiegeln*.
- **Ansicht-Panel** — alles zur Ansicht an einem Ort: *Ansicht von*, *Drehen*, *Ortho*, *Einpassen*, *Dehnung*, Rahmendeckkraft, *Raster*-Einstellungen und *Gespeicherte Ansichten*.
- **Punktleiste** — erscheint beim Bearbeiten: Punkttypen und Punktwerkzeuge, *Verschieben entlang*, *Drehen um*.
- **Tipps** (unten links) — zeigen, was der nächste Klick bewirkt. Mit der ⓘ-Taste einklappen.
- **Rechts** — Vorschau des Schneidebogens, die Decal-Liste, Bogeneinstellungen und *SVG herunterladen*.

---

## 2. Einen Rahmen laden

### Eigenes Modell öffnen
**Öffnen** einer `.glb`-, `.gltf`-, `.obj`- oder `.stl`-Datei, oder die Datei auf die 3D-Ansicht ziehen. Das Fenster **Modellgröße prüfen** zeigt die Größe des Modells in Millimetern, Zentimetern, Metern und Zoll, die erkannte Einheit ist markiert — wähle die, die die echte Größe ergibt. Alles (Decals, Dehnung, Schneidebogen) wird daraus gemessen, und eine falsche Einheit lässt auch das Zoomen falsch wirken. Später änderst du sie über *Modelleinheit* in der oberen Leiste. STL-Dateien werden mit Z nach oben gelesen, wie Blender und CAD-Programme sie exportieren.

Das echte Rahmenmodell ergibt die genauesten Produktionsschnitte.

### Rahmen aus Geometrie bauen
**Rahmen aus Geometrie** baut einen Rahmen aus Zahlen:

- Wähle eine **Vorlage** (Rennrad, Endurance, Gravel, MTB, Carbon und Aero) und eine **Größe**, oder gib eigene Werte ein: Stack, Reach, Lenk- und Sitzwinkel, Steuerrohr, Sitzrohr, Oberrohrneigung, Kettenstrebe, Tretlagerabsenkung, Front-Center oder Gabellänge und Vorlauf.
- **Rohrform und Durchmesser** — rund, Carbon-oval oder Aero, der Querschnitt von Kreis bis Quadrat und jeder Rohrdurchmesser.
- **Geometrietabelle einfügen** — kopiere die Geometrietabelle von der Website des Herstellers und füge sie ein; Größen und Maße werden erkannt und als eigene Vorlage gespeichert.
- Die Zeile *Ergebnis* zeigt Radstand, Front-Center, effektives Oberrohr und Nachlauf zur Kontrolle.
- **Meine Decals auf den neuen Rahmen übertragen** behält deine Arbeit, wenn du die Größe wechselst.

Nutze einen erzeugten Rahmen für Layout und Größen; für Produktionsschnitte das echte Rahmenmodell.

**Neu** beginnt wieder mit dem Startrahmen.

---

## 3. In der 3D-Ansicht bewegen

- **Drehen:** Hintergrund ziehen, oder Alt bzw. Leertaste halten und ziehen (auch über dem Modell).
- **Verschieben:** mit rechts ziehen.
- **Zoomen:** scrollen — es zoomt um den Punkt unter dem Mauszeiger — oder mit der mittleren Taste ziehen. Auch ein Trackpad-Pinch zoomt.
- **Ansicht-Panel:** *Ansicht von* Vorne, Hinten, Links, Rechts, Oben, Unten; *Drehen* in 45°-Schritten; und **Gespeicherte Ansichten** (dreh das Modell in einen passenden Winkel und klicke *Ansicht speichern*).
- **Ortho** schaltet auf orthografische Ansicht (ohne Perspektive) — ideal mit den Achsenansichten für genaue Layouts.
- **Raster** zeigt ein Raster und kann Punkte daran fangen (2,5D: das Raster bestimmt die Position in der Ebene, die Rahmenoberfläche die Tiefe). Abstand, Ebene und *Fangen* stellst du im Raster-Teil des Ansicht-Panels ein.
- **Rahmendeckkraft** macht den Rahmen durchsichtig, damit du Decals auf der Rückseite siehst (Alt+Z schaltet um).
- **Einpassen** zeigt den ganzen Rahmen.

Z ist die senkrechte Achse. X verläuft von vorne nach hinten entlang des Rads, Y seitlich.

---

## 4. Decals zeichnen

Wähle **Zeichnen**. Die Formen sind **Stift**, **Rechteck**, **Kreis**, **Polygon** und **Pille**.

### Stift
- **Klicke** auf das Modell, um Punkte zu setzen. Standardmäßig werden Punkte mit geraden Linien verbunden (*Gerade*); wähle *Kurvig* für weiche Kurven. Später kannst du einen Punkt doppelklicken, um zwischen Kurve und Ecke zu wechseln.
- **Drücken und ziehen**, um eine Kontur frei zu skizzieren.
- **Form schließen**: auf den gelben ersten Punkt klicken, Enter drücken oder *Form schließen*. Esc beendet das Zeichnen und lässt die Linie offen; klicke sie später an, um weiterzumachen.
- **Neben dem Modell beginnen:** klicke neben das Modell und setze weiter Punkte rund um das Rohr, auf oder neben dem Modell. Die Linie wird in der Ansicht gezeichnet und beim Schließen auf die sichtbare Fläche projiziert. Wo die Linie neben dem Modell verläuft, folgt das Decal dem Rand des Rohrs. Ziehen neben dem Modell zeichnet frei und dreht die Ansicht nicht; mit Leertaste + Ziehen drehst du sie beim Zeichnen. Rücktaste entfernt den letzten Punkt, Esc bricht ab.

### Rechteck, Kreis, Polygon
- **Ziehen** zum Zeichnen. Beim Ziehen wird die Größe in mm angezeigt.
- Rechteck: Umschalt macht ein Quadrat, Alt zeichnet von der Mitte aus. Kreis: Umschalt zieht von Rand zu Rand. Polygon: die Anzahl der **Ecken** (3–64) einstellen; die Zugrichtung bestimmt die Drehung.
- **r** rundet die Ecken von Rechtecken und Polygonen ab.
- **Pille** (Langloch mit runden Enden): Länge und Breite aufziehen (Alt von der Mitte aus), oder **L × B** in mm in der Werkzeugleiste eingeben und auf das Modell klicken, um eine in genau dieser Größe zu platzieren.
- Formen werden aus deiner Ansicht auf die Fläche projiziert — dreh die Ansicht, um sie an einem Rohr auszurichten. Sie dürfen über das Rohr hinausgehen; das Decal endet am Rand des Rohrs.
- **Auf Spiegel zentrieren** (nur im Spiegelmodus) setzt die Mitte der Form auf die Mittelebene, damit sie genau mittig liegt.

Nach dem Zeichnen wird jedes Decal automatisch abgewickelt. Das Dehnungs-Etikett in der Liste zeigt, wie gut es anliegt.

---

## 5. Punkte bearbeiten

Wähle **Bearbeiten** und klicke ein Decal an.

### Auswählen
- Klicke einen Punkt, um ihn auszuwählen. Umschalt-Klick fügt Punkte hinzu oder entfernt sie; mit Umschalt einen Rahmen ziehen wählt mehrere. Strg+A wählt alle Punkte des Decals.
- **F** zoomt auf die Auswahl.

### Kontur ändern
- **Ziehen** verschiebt Punkte; Umschalt für feine Bewegungen; Pfeiltasten schieben.
- **Strg-Klick** auf die Linie oder das Modell fügt einen Punkt hinzu; **Alt-Klick** löscht einen Punkt.
- Einen Punkt auf seinen Nachbarn ziehen führt beide zusammen, oder mehrere auswählen und **M** drücken (*Zusammenführen*).
- **Löschen** entfernt die ausgewählten Punkte.
- **Teilen:** zwei Punkte ausgewählt — die Kontur zwischen ihnen teilen; ein Punkt — die Kontur dort öffnen.

### Punkttypen
- **Auto** — Anfasser folgen den Nachbarpunkten (weich, automatisch).
- **Glatt** — bearbeitbare Anfasser, die in einer Linie bleiben.
- **Geknickt** — Anfasser bewegen sich unabhängig, für einen Knick.
- **Ecke** — scharfe Ecke ohne Anfasser.

Zieh die pinken Anfasser, um die Kurve zu biegen; Alt-Ziehen trennt sie.

### Punktwerkzeuge
- **Kurve glätten / Alle glätten** — gleicht unruhige Punkte aus und gibt ihnen automatische Anfasser. Nochmal klicken glättet weiter.
- **Ecken abrunden / Alle abrunden** mit Radius **r** in mm.
- **Vereinfachen / Alle vereinfachen** mit Toleranz **±** in mm — entfernt Punkte, die die Form nicht braucht (dezimieren). Nützlich nach Freihandzeichnen oder SVG-Import.

---

## 6. Verschieben, Drehen, Skalieren

Beim Bearbeiten zeigt das ausgewählte Decal einen **Gizmo**:

- **Mittelgriff** — ziehen zum Verschieben.
- **Knopf** (oder der gestrichelte Ring) — ziehen zum Drehen. Umschalt: 15°-Schritte.
- **Eckquadrate** — ziehen zum Skalieren. Umschalt: 5-%-Schritte.

Du kannst auch innerhalb des ausgewählten Decals ziehen, um es zu verschieben, mit **Strg + Scrollen** drehen und mit **Alt + Scrollen** skalieren.

Mit **zwei oder mehr ausgewählten Punkten** wirken Gizmo und Scroll-Kürzel nur auf diese Punkte.

**Maße.** Beim Ziehen zeigt ein Etikett neben dem Zeiger die Werte: für ein Decal, wie weit es entlang der Fläche verschoben wurde, den Winkel, die Größe in % und seine flache Größe in mm; für einen Punkt, wie weit er verschoben wurde (mit den X-/Y-/Z-Anteilen) und den Abstand zu den Nachbarpunkten; für einen Anfasser seine Länge. Beim Zeichnen mit dem Stift zeigt das Etikett die Länge des nächsten Segments und der ganzen Linie.

### Verschieben entlang
*Frei | X | Y | Z* in der Punktleiste. Frei verschiebt über die Fläche; X, Y oder Z sperrt die Bewegung auf diese Achse (eine gestrichelte Hilfslinie zeigt sie). Beim Ziehen eines Decals oder von Punkten kannst du **X**, **Y** oder **Z** drücken, um zu sperren, und dieselbe Taste nochmal, um freizugeben.

### Drehen um
*Ansicht | Fläche | X | Y | Z* in der Punktleiste.

- **Ansicht** — dreht das Decal so, wie du es siehst, um die Blickachse, und legt es wieder auf die Fläche.
- **Fläche** — dreht es auf der Fläche um die Flächennormale in seiner Mitte. Behält die echte Größe.
- **X / Y / Z** — dreht es um diese Weltachse durch die Mitte des Rohrs darunter. Drehen um die eigene Achse des Rohrs schiebt das Decal um das Rohr herum.

Verschieben und Drehen um die *Fläche* behalten die echte Größe des Decals auf einem Rohr. *Ansicht*, *X*, *Y* und *Z* projizieren das Decal zurück auf die Fläche, was seine echte Größe auf einem gewölbten Rohr verändern kann — prüfe das Dehnungs-Etikett.

---

## 7. Spiegelmodus

**Spiegeln** ist standardmäßig an. Decals bekommen eine gespiegelte Kopie auf der anderen Rahmenseite.

- **Ebene** wählt die Spiegelebene (auto, links | rechts, vorne | hinten, oben | unten).
- Punkte nahe der pinken Mittelebene rasten dort ein. **Fangen** stellt den Abstand in mm ein (bei 0 rasten sie nur ein, wenn du sie über die Ebene ziehst).
- Ein Decal, das auf der Mittelebene beginnt und endet, wird **ein symmetrisches Decal** über die Mitte — du bearbeitest eine Hälfte, die andere folgt.
- Eine Form oder Stift-Kontur, die die Mittelebene kreuzt, wird dort geschnitten und zu einem symmetrischen Decal (keine überlappenden Kopien).
- **Anwenden** (in der Decal-Liste) macht aus dem gespiegelten Teil eine echte, eigenständig bearbeitbare Kontur.

---

## 8. Messer

Wähle **Messer** und klicke Punkte in der Ansicht — auf oder neben dem Modell.

- Eine Linie **über ein Decal** teilt es. Zieh sie über die Ränder hinaus.
- Klicke **erneut auf den ersten Punkt**, um eine Schleife zu schließen: *Schnitt anwenden* schneidet diese Fläche aus den überlappten Decals oder lässt ein Loch, wenn sie innen liegt.
- **Durchschneiden** (standardmäßig an, Taste **T**) schneidet jede Fläche unter der Linie, vorne und hinten. Aus: nur die sichtbare Seite.
- Im Spiegelmodus werden Schnitte auf die andere Seite gespiegelt; ein Schnitt, der an der Mittellinie beginnt oder endet, läuft darüber hinweg weiter.
- **Schnitt anwenden** (Enter) wendet an, **Löschen** (Esc) entfernt die Linie, Rücktaste entfernt den letzten Messerpunkt.
- Gesperrte Decals werden nicht geschnitten.

---

## 9. Decals kombinieren

Wähle ein Decal und **Umschalt-Klick** auf ein zweites (auf dem Modell oder in der Liste). Das zweite erscheint blau, und das Panel **Optionen** zeigt beide Namen mit den Tasten unten.

- **Vereinigen** verbindet beide Formen.
- **Abziehen** schneidet die blaue Form aus der ersten (**Tauschen** wechselt, welche aus welcher geschnitten wird).
- **Schnittmenge** behält nur die Überlappung.

Neue Punkte entstehen nur dort, wo sich die Konturen kreuzen. Formen mit Löchern (wie ein Donut) bleiben ein Decal mit Loch. Kombinieren funktioniert auch im Spiegelmodus.

---

## 10. SVG-Grafik importieren

**SVG importieren** (oder eine `.svg` hineinziehen). Jede geschlossene Form wird ein bearbeitbares Decal; Löcher bleiben erhalten.

1. Echte **Breite/Höhe** (Proportionen beibehalten) und **Drehung** einstellen.
2. **Auf die Fläche wickeln** (behält echte Maße wie auf das Rohr gelegte Folie — am besten für Decals) oder **Aus der Ansicht projizieren** (sieht aus diesem Winkel richtig aus, wird auf Rundungen aber gedehnt).
3. Optional auf die andere Seite **spiegeln**.
4. Über das Modell fahren, um die orange Vorschau zu sehen, klicken zum Platzieren. Alt + Scrollen ändert die Größe, Strg + Scrollen dreht (Umschalt für größere Schritte, eingerastet auf die gewählten Schritte). **Anwenden** (Enter) fügt hinzu; woanders klicken verschiebt.

Wandle Live-Text vorher in deinem Grafikprogramm in Pfade um.

---

## 11. Die Decal-Liste

Jede Zeile zeigt den Namen des Decals (anklicken zum Umbenennen), seine flache Größe in mm und seine **Dehnung**:

- grün — liegt flach ohne Dehnung;
- gelb — leichte Dehnung, für Folie meist kein Problem;
- rot — die Folie kann Falten werfen; setze einen Entlastungsschnitt oder teile das Decal.

**Dehnung** in der Ansichtsleiste färbt jedes Decal auf dem Modell danach, wie stark sich die Folie dehnen muss.

Schaltflächen in der Zeile: **Spiegeln**, **Anwenden** (Spiegelung), **Umkehren** (die Folie deckt die Fläche außerhalb der Kontur statt innerhalb, z. B. um ein Rohrende), **Lösen** (ein Loch zu einem eigenen Teil machen), **Duplizieren**, **🔒 Sperren**, **Löschen**.

**Duplizieren** (oder **Strg+D**) kopiert das Decal mit seinen Löchern und der Spiegel-Einstellung und legt die Kopie direkt daneben auf die Fläche, auf derselben Seite der Spiegelebene. Die Kopie ist ausgewählt, du kannst sie also gleich mit dem Gizmo an ihren Platz ziehen. Weiteres Duplizieren reiht weitere Kopien auf.

**Entlastungsschnitte** erscheint, wenn ein Decal zu stark gedehnt wird (rot). Es schneidet kleine V-Kerben vom Rand in die am stärksten gedehnten Bereiche, damit die Folie flach liegen kann. Schalte **Dehnung** in der Ansichtsleiste ein, um die vorgeschlagenen Schnitte vorher als rote gestrichelte Linien zu sehen. Bei stark gewölbten Flächen hilft oft mehr, das Decal mit dem Messer zu teilen.

**Sperren** macht ein Decal auf dem Modell nicht mehr auswählbar und bearbeitbar, damit du darüber zeichnen kannst. Das Messer lässt gesperrte Decals in Ruhe.

---

## 12. Bogen und Export

- **Breite, Höhe, Abstand** des Bogens in mm. Die Vorschau zeigt, wie die Teile angeordnet sind und wie viele es sind.
- **Namen beschriften**, **Bogenumriss**, **Teile spiegeln** (zum Schneiden von der Rückseite).
- **Saubere Kurven** exportiert glatte Bézierkurven mit wenigen Knoten. **±** legt fest, wie weit exportierte Kurven von der abgewickelten Kontur abweichen dürfen (Standard 0,1 mm); höher ergibt weniger, glattere Knoten.
- **SVG herunterladen**. Schnittlinien sind schwarze Pfade in Millimetern auf der Ebene `cut`; Beschriftungen und Bogenumriss liegen auf eigenen Ebenen, damit du sie in der Plotter-Software ausblenden kannst.

Ist ein Teil größer als der Bogen, vergrößere den Bogen oder teile das Decal.

---

## 13. Projekte speichern

**Speichern** schreibt eine `.json`-Projektdatei mit Rahmen und allen Decals, Ansichten und Einstellungen. **Öffne** ein `.json`-Projekt, um weiterzuarbeiten. Ein Projekt mit erzeugtem Rahmen enthält den Rahmen; bei deinem eigenen Modell öffne, falls verlangt, zuerst das Modell und dann das Projekt.

---

## 14. Panels und Sprache

- Jedes Panel hat einen **Griff** (⋮⋮) und eine **Nadel**. Zieh ein Panel an eine beliebige Stelle; leg es nahe einem Rand oder in einer Ecke ab, um es dort anzuheften. Die Nadel löst ein angeheftetes Panel oder heftet ein freies am nächsten Rand an.
- Panels überlappen sich nie: ein Panel im Weg weicht aus. Leg ein Panel neben ein anderes, und es rastet daran ein, so kannst du Panels stapeln.
- Jedes Panel hat eine **Dreh**-Taste, um zwischen Zeile und Spalte zu wechseln, und eine **Einklapp**-Taste (⌄), die es auf seinen Namen zusammenklappt; ein weiterer Klick öffnet es wieder.
- Am linken oder rechten Rand angeheftet steht ein Panel als Spalte, oben oder unten liegt es als Zeile (außer du hast es selbst gedreht).
- **Panels zurücksetzen** (im Ansicht-Panel) stellt alles wieder her. Dein Layout wird gespeichert.
- **EN | DE** wechselt die Sprache. Deutschsprachige Browser starten auf Deutsch.

---

## 15. Tastenkürzel

| Taste | Aktion |
|---|---|
| Strg+Z / Strg+Umschalt+Z (Strg+Y) | Rückgängig / Wiederholen |
| Enter | Form schließen · Messerschnitt anwenden · Platzierung anwenden |
| Esc | Zeichnen beenden · Messer löschen · Abbrechen |
| Rücktaste / Entf | Ausgewählte Punkte löschen · letzten Messer- oder Konturpunkt entfernen |
| Strg+A | Alle Punkte des Decals auswählen |
| Strg+D | Ausgewähltes Decal duplizieren |
| M | Ausgewählte Punkte zusammenführen |
| F | Auf Auswahl zoomen |
| Pfeiltasten (Umschalt) | Ausgewählte Punkte schieben |
| X / Y / Z (beim Ziehen) | Bewegung auf eine Achse sperren |
| Strg + Scrollen / Alt + Scrollen | Decal oder Auswahl drehen / skalieren (Umschalt: größere Schritte) |
| T | Messer: Durchschneiden an/aus |
| 1 / 3 / 7 | Ansicht rechts / vorne / oben (Strg: links / hinten / unten) |
| 4 / 6, 8 / 2 | Ansicht um 45° drehen / kippen |
| 5 | Perspektive / Ortho |
| 0 (Pos1) | Rahmen einpassen |
| G | Raster an/aus |
| Alt+Z | Rahmen durchsichtig an/aus |
| R, [ , ] | SVG-Platzierung: drehen, kleiner, größer |
| Leertaste + Ziehen | Ansicht drehen (auch über dem Modell) |

Auf dem Mac ⌘ statt Strg verwenden.

---

## 16. Tipps und Problemlösung

- **„Die Kontur springt auf ein getrenntes Teil des Modells“** — halte jedes Decal auf einer zusammenhängenden Fläche (einem Rohr).
- **„Diese Form umschließt ein Rohr ganz“** — lass eine kleine Lücke, damit die Folie flach liegen kann.
- **Hohe Dehnung (rot)** — schalte *Dehnung* ein, um zu sehen, wo Entlastungsschnitte hingehören, drück *Entlastungsschnitte* in der Liste, mach das Decal um das Rohr herum schmaler oder teile es mit dem Messer.
- **Modell wirkt winzig oder riesig, oder Zoomen fühlt sich falsch an** — die Einheit stimmt nicht. Wähle die richtige unter *Modelleinheit* (obere Leiste) oder öffne das Modell neu.
- **Zu viele Punkte** — nutze *Vereinfachen*. Für den Export erhöhe die Toleranz **±** unter *Saubere Kurven*.
- **Ein Decal lässt sich nicht anklicken, weil ein anderes darüber liegt** — sperre das störende.
- **Auf der Rückseite zeichnen** — mach den Rahmen durchsichtig (Alt+Z) oder dreh die Ansicht.
- Das Werkzeug läuft vollständig in deinem Browser; nichts wird hochgeladen.

---

© 2026 Max Soldatkin. Frei für private und andere nicht-kommerzielle Nutzung unter der [PolyForm Noncommercial License 1.0.0](LICENSE.md). Jede kommerzielle Nutzung braucht eine schriftliche Erlaubnis.
