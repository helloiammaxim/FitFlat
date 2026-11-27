# FitFlat — Anleitung

**[English version](MANUAL.md)**

FitFlat ist ein Browser-Werkzeug für Rahmenschutzfolie am Fahrrad. Du zeichnest die Decals direkt auf einen 3D-Rahmen, meist einen 3D-Scan des echten Rahmens; das Werkzeug wickelt jedes davon verzerrungsfrei ab, ordnet die Teile auf einem Bogen an und exportiert eine SVG für deinen Plotter oder Schneideplotter.

Öffne `index.html` in einem aktuellen Browser (Chrome, Edge, Safari, Firefox). Keine Installation nötig. Deine Arbeit bleibt auf deinem Rechner.

---

Der **?**-Knopf oben startet eine kurze Tour, die auf die wichtigsten Bedienelemente zeigt: 3D-Ansicht, Zeichnen, Bearbeiten und die drei Reiter Decals, Ansicht und Bogen. Beim ersten Besuch erscheint sie von selbst.

## Inhalt

- [Schnellstart mit einem Scan](#schnellstart-mit-einem-scan)

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

## Schnellstart mit einem Scan

1. **Exportiere** den Scan aus deiner Scanner-Software als **STL** in Millimetern (Einstellungen für EXStar Hub und andere: [Das Modell vorbereiten](#das-modell-vorbereiten-export-einstellungen)).
2. **Öffne** ihn in FitFlat, wähl **Millimeter**, drück **Automatisch ausrichten** und hak **Symmetrisch machen** an, wenn beide Seiten gleich sein sollen. Dann **Modell öffnen**.
3. **Zeichne** die Decals auf den Rahmen (Taste **D**). Mit **Spiegeln** folgt die andere Seite.
4. Prüf die **Dehnungsfarben**. Wo ein Teil rot ist, setz die vorgeschlagenen V-Kerben im Tab Bogen.
5. Wähl im Tab **Bogen** Folie und Bogengröße, dann **SVG herunterladen** (oder **DXF**) für deinen Plotter.

Noch kein Scan? **Rahmen aus Geometrie** baut einen Rahmen aus der Geometrietabelle eines Herstellers ([Abschnitt 2](#rahmen-aus-geometrie-bauen)).

---

## 1. Die Oberfläche

- **Obere Leiste** — Sprache (EN | DE), *Rahmen aus Geometrie*, Modelleinheit und die Dateischaltflächen *Neu*, *Öffnen*, *SVG importieren*, *Speichern*.
- **Werkzeuge** (links) — *Zeichnen*, *Bearbeiten*, *Messer*.
- **Werkzeugoptionen** (oben) — Rückgängig/Wiederholen und die Optionen des aktuellen Werkzeugs, dazu *Spiegeln*.
- **Tipps** (unten links) — zeigen, was der nächste Klick bewirkt. Mit der ⓘ-Taste einklappen.
- **Seitenleiste** (rechts) mit drei Reitern, damit die 3D-Ansicht frei bleibt:
  - **Decals** — die Decal-Liste; beim Bearbeiten auch **Ausgewähltes Decal** (Verschieben per Zahl, Abstand zu den Rohrenden, Drehen, Größe, Versatz, Einrasten, In Bibliothek speichern) und **Punkte** (Punkttypen und Punktwerkzeuge, *Verschieben entlang*, *Drehen um*); dazu **Verlauf**.
  - **Ansicht** — *Ansicht von*, *Drehen*, *Ortho*, *Einpassen*, *Dehnung*, Rahmendeckkraft, *Raster*, *Referenzbild* und *Gespeicherte Ansichten*.
  - **Bogen** — Vorschau des Schneidebogens, *Größen*, *Folie*, Bogeneinstellungen und *SVG / DXF herunterladen*.

---

## 2. Einen Rahmen laden


### Eigenes Modell öffnen
**Öffnen** einer `.glb`-, `.gltf`-, `.obj`- oder `.stl`-Datei, oder die Datei auf die 3D-Ansicht ziehen. Das Fenster **Modellgröße prüfen** zeigt eine 3D-Vorschau des Modells, wie es geöffnet wird (Vorderseite des Rads nach rechts, aufrecht; ziehen zum Umsehen), und seine Größe in Millimetern, Zentimetern, Metern und Zoll, die erkannte Einheit ist markiert — wähle die, die die echte Größe ergibt. Liegt es falsch, dreh es mit **X**, **Y**, **Z** (je 90°, rot, grün, blau wie in Blender) oder drück **Aufrichten** (längste Seite entlang des Rads, dünnste quer); **Zurücksetzen** stellt die Ausrichtung der Datei wieder her. Die Größen ändern sich beim Drehen mit, und das Modell öffnet sich so, wie die Vorschau es zeigt. Alles (Decals, Dehnung, Schneidebogen) wird daraus gemessen, und eine falsche Einheit lässt auch das Zoomen falsch wirken. Später änderst du sie über *Modelleinheit* in der oberen Leiste. STL-Dateien werden mit Z nach oben gelesen, wie Blender und CAD-Programme sie exportieren.

**Scans: Automatisch ausrichten.** Ein Scan (EXStar Hub, Artec, Polycam …) liegt selten gerade, und seine Box ist nicht auf den Rahmen zentriert, deshalb landen gespiegelte Decals etwas daneben. Drück **Automatisch ausrichten**: FitFlat findet die echte Mittelebene des Rahmens, indem es beide Seiten vergleicht (kleine einseitige Teile wie Schaltauge, Bremsaufnahme oder Kabeleingänge werden ignoriert), stellt den Rahmen gerade, die Front nach rechts und das Tretlager nach unten, und richtet ihn an den Kettenstreben waagerecht aus. Das Spiegeln nutzt dann diese Ebene, nicht die Mitte der Box. Prüf die Vorschau: Zeigen Front oder Unterseite falsch herum, dreh mit **Z** (zweimal) oder **X** (zweimal). Die Dreiecke des Scans müssen links und rechts nicht zusammenpassen; gespiegelte Decals werden auf die Fläche der anderen Seite gelegt.

**Symmetrisch machen** (erscheint nach dem Ausrichten): behält eine Hälfte des Scans, die Nicht-Antriebsseite oder die Antriebsseite, und spiegelt sie auf die andere Seite, sodass beide Seiten genau gleich sind. Gespiegelte Decals und ihre Schnittteile passen dann exakt, und Scan-Rauschen kann die beiden Teile nicht unterscheiden lassen. Teile, die es nur auf einer Seite gibt, werden von der behaltenen Hälfte kopiert oder verschwinden, also behalte die Seite, die dem, was die Folie abdecken soll, am nächsten kommt.

Das echte Rahmenmodell ergibt die genauesten Produktionsschnitte.

### Das Modell vorbereiten (Export-Einstellungen)
**Lage:** Der Rahmen steht wie beim Fahren, vorne (Steuerrohr und Gabel) Richtung **+X**, Antriebsseite (Kettenblatt) Richtung **−Y**, Mittelebene des Rahmens bei Y = 0. In Blender und Plasticity ist das das Rad von der Seite in der *Front*-Ansicht. Andere Richtungen gehen auch; nur die erste Ansicht ändert sich.

**Hochachse:** FitFlat liest `.glb`/`.gltf` und `.obj` mit **Y nach oben** (der übliche Standard) und `.stl` mit **Z nach oben**. Wenn in der Größenangabe oben Höhe und Breite vertauscht sind, liegt das Modell auf der Seite: mit der richtigen Hochachse neu exportieren.

**Nur der Rahmen:** Rahmen (und Gabel) als ein Objekt exportieren, ohne Laufräder, Anbauteile oder Boden. Einseitige Teile möglichst weglassen (Schaltauge, Bremsaufnahme): Sie verschieben die Mitte, um die **Ebene: auto** spiegelt.

**Plasticity** — *File › Export*, *Wavefront OBJ (.obj)*:

| Option | Einstellung für FitFlat |
|---|---|
| Topology | **Tris** |
| Face Angle Tolerance | **0.15** (High Poly) |
| Edge Angle Tolerance | **0.15** |
| Face Plane Tolerance | **0.005** (cm, = 0,05 mm) |
| Max Width | etwa **0.4** cm (4 mm, die Größe, mit der FitFlat arbeitet) |
| Simplify Radial Surfaces | an (gleichmäßige Ringe um die Rohre) |
| Remove Small Features | aus |
| Up Axis | **Y** |
| Scale | 1, dann die Einheit in FitFlats Fenster *Modellgröße prüfen* wählen |

**EXStar Hub (Einstar-Scanner)** — Scans liegen so, wie der Scan endete; erst den Rahmen ausrichten, dann als STL exportieren:

1. **Aufräumen:** Ständer, Drehteller, Boden und lose Teile entfernen; kleine Löcher in den Rohren schließen (ein Loch, wo ein Decal hinkommt, macht dieses Decal kaputt).
2. **Vereinfachen** (*Mesh Editing › Simplification*, 0–99 % weniger Dreiecke): Ziel etwa 300.000–500.000 Dreiecke. Ein Scan mit ein paar Millionen Dreiecken braucht einen hohen Wert (um 85–90); prüfen, dass die Rohrkanten rund bleiben.
3. **Ausrichten** (*Align*: *Rotation*/*Offset* eingeben und *Move to*, oder *3-2-1-Ausrichtung* mit Ebene, Linie und Punkt): Rahmen steht wie beim Fahren, **Z nach oben**, vorne Richtung **+X**, Antriebsseite Richtung **−Y**, Mittelebene bei Y = 0. Das globale Koordinatensystem einschalten, um die Achsen zu sehen (rot X, grün Y, blau Z). Du kannst diesen Schritt auch überspringen und beim Öffnen in FitFlat **Automatisch ausrichten** drücken; das findet die Mittelebene genauer als Ausrichten nach Augenmaß.
4. **Exportieren** als **STL** (FitFlat liest STL mit Z nach oben) und in FitFlats *Modellgröße prüfen* **Millimeter** wählen. OBJ geht auch, aber FitFlat liest OBJ mit Y nach oben, dann käme der Rahmen liegend an.

**Blender** — *Datei › Exportieren › glTF 2.0*, Format *glTF Binary (.glb)*: *Include › Selected Objects*, *Transform › +Y Up* an (Standard), *Mesh › Apply Modifiers* an. Oder *Wavefront (.obj)* mit *Up: Y*, *Forward: −Z* (Standard). Vorher Drehung und Maßstab anwenden (Strg+A).

**CAD (SolidWorks, Fusion, Onshape, Rhino)** — STL oder OBJ mit feiner Flächenabweichung exportieren (Sehnentoleranz etwa **0,05 mm**, Winkel etwa **10°**) und, falls angeboten, maximaler Kantenlänge um 4 mm.

**Wie viele Dreiecke:** 50.000–300.000, gleichmäßig verteilt, sind ideal. Runde Rohre brauchen mindestens **32 Seiten** rundherum (64 sind besser); lange, dünne Dreiecke aus CAD schaden der Genauigkeit mehr als eine kleine Anzahl. FitFlat teilt große Dreiecke selbst auf etwa 4 mm (bis 400.000). Bis etwa 500.000 Dreiecke läuft es flüssig; über etwa 2 Millionen kann dem Browser der Speicher ausgehen. 3D-Scans vorher auf etwa 300.000–500.000 ausdünnen (Blender: *Decimate* oder *Remesh*).

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
- **Präzision:** Halte beim Scrollen, Drehen oder Verschieben der Ansicht **Alt** gedrückt, dann bewegt sie sich mit einem Fünftel der Geschwindigkeit. (In Bearbeiten mit ausgewähltem Decal skaliert Alt + Scrollen stattdessen das Decal.)
- **Ansicht-Panel:** *Ansicht von* Vorne, Hinten, Links, Rechts, Oben, Unten; *Drehen* in 45°-Schritten; und **Gespeicherte Ansichten** (dreh das Modell in einen passenden Winkel und klicke *Ansicht speichern*).
- **Ortho** schaltet auf orthografische Ansicht (ohne Perspektive) — ideal mit den Achsenansichten für genaue Layouts.
- **Raster** zeigt ein Raster und kann Punkte daran fangen (2,5D: das Raster bestimmt die Position in der Ebene, die Rahmenoberfläche die Tiefe). Abstand, Ebene und *Fangen* stellst du im Raster-Teil des Ansicht-Panels ein.
- **Rahmendeckkraft** macht den Rahmen durchsichtig, damit du Decals auf der Rückseite siehst (Alt+Z schaltet um).
- **Einpassen** zeigt den ganzen Rahmen.

Z ist die senkrechte Achse. X verläuft von vorne nach hinten entlang des Rads, Y seitlich.

### Referenzbild
Im Ansicht-Panel legt **Referenzbild → Laden…** ein Foto des echten Rahmens über die Ansicht, mit **Anpassen** eingeschaltet: Zieh das Foto, um es zu verschieben, scroll darüber, um die Größe zu ändern (mit **Alt** in feinen Schritten), dreh es am runden Griff darüber oder gib im **°**-Feld einen genauen Winkel ein (Pfeiltasten im Feld: 0,5°, Umschalt: 5°), und schieb es mit den Pfeiltasten fein. **Alles** holt das ganze Foto wieder in die Ansicht, wenn es größer als der Bildschirm ist. Schalt **Anpassen** aus, um das Modell hinter dem Foto wieder zu drehen und zu zoomen, und stell die Deckkraft mit dem Regler ein. Dann fixierst du es:

- **Aufs Modell kleben** projiziert das Foto aus dieser Ansicht auf den Rahmen, sodass es beim Drehen auf den Rohren bleibt. Gut zum Nachzeichnen von Lackkanten, Logos und Zugdurchführungen.
- **Als Ebene fixieren** stellt das Foto als flache Tafel durch die Mitte des Modells in die Szene, zur Ansicht gedreht, in der es ausgerichtet war. Gut für ein Seitenfoto, mit dem du aus anderen Winkeln vergleichen willst.

**Lösen** geht zurück in die Ansicht, in der das Foto ausgerichtet war, und schaltet Anpassen wieder ein; **Entfernen** löscht es.

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

### Live-Abwicklung
**Live-Abwicklung** ist standardmäßig aus: Änderungen zeichnen nur die Kontur neu, das Decal zeigt **nicht abgewickelt** und fehlt auf dem Bogen, bis du **Abwickeln** (Taste **U**) drückst, wenn die Form fertig ist. Schalte **Live-Abwicklung** ein (Taste **L**), um nach jeder Änderung abzuwickeln, praktisch für kleine Korrekturen, aber langsamer bei großen Rahmen. Beim ersten Wechsel in Bearbeiten erklärt ein Hinweis das (*Nicht mehr anzeigen* anhaken, um ihn auszublenden). Der Bogen-Tab, Export, Kombinieren und Entlastungsschnitte wickeln Wartendes von selbst ab.

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

### Das Decal-Panel
Im Bearbeiten-Modus, mit einem geschlossenen Decal ausgewählt, gibst du im Panel **Decal** genaue Werte ein:

- **Verschieben X / Y / Z** — verschiebt das Decal um diese Strecken in mm, entlang der Fläche.
- **Start / Ende** (Rahmen aus Geometrie) — der Abstand vom Decal zu jedem Ende des Rohrs, auf dem es sitzt (gemessen entlang der Rohrmittellinie). Gib einen neuen Wert ein, um das Decal entlang des Rohrs zu schieben.
- **Drehen ° / Größe %** — dreht (um die Achse aus *Drehen um*) und skaliert das Decal um die eingegebenen Werte.
- **Versatz → Vergrößern / Verkleinern** — schiebt die ganze Kontur um den Abstand nach außen oder innen, entlang der Fläche. Kurven bleiben glatt, Ecken bleiben spitz.
- **An Decals einrasten** mit **Abstand** — beim Ziehen rastet die Kante eines Decals genau mit diesem Abstand an einem Nachbar-Decal ein und gleitet daran entlang. Weiter drücken löst es wieder.
- **In Bibliothek speichern** — behält das Decal als Vorlage, die du auf jedem Rahmen wieder platzieren kannst (siehe *Projekte speichern*).

---

## 7. Spiegelmodus

**Spiegeln** ist standardmäßig an. Decals bekommen eine gespiegelte Kopie auf der anderen Rahmenseite.

- **Ebene** wählt die Spiegelebene (auto, links | rechts, vorne | hinten, oben | unten).
- Punkte nahe der pinken Mittelebene rasten dort ein und verbinden sich mit ihrem Spiegelbild. **Fangen** stellt den Abstand in mm ein.
- **Naht-Fang** (Taste **Q**) schaltet das ab: Punkte bleiben nahe der Naht genau dort, wo du sie setzt; an der Ebene halten sie nur an, statt sie zu überqueren. Ein Punkt auf der Ebene löst sich, wenn du ihn weiter als den Fangabstand (mindestens 3 mm) ziehst.
- **Verbinden** (in der Zeile des Decals) legt fest, ob beide Seiten über die Mittellinie ein Teil sind oder zwei getrennte gespiegelte Teile, die sich dort nur berühren.
- Eine Form, die ganz um ein Rohr läuft, wird nie zu einem Ring geschlossen: Sie verbindet sich an einer Strecke der Mittellinie und bleibt an der anderen offen, lässt sich also immer zu einem flachen Teil abwickeln.
- Sobald sich ein Teil um ein Rohr schließt, fragt FitFlat, wo die Naht hin soll (unten, oben, hinten oder vorne), und zeigt sie am Modell als gestrichelte Linie. **Naht** in der Zeile des Decals ändert sie später.
- Wo ein gespiegeltes Decal an der Mittellinie entlangläuft, ist jedes Stück davon eine **Kante** mit einem kleinen nummerierten Schild am Modell: ein Kettenglied heißt **verbunden** (beide Seiten sind dort ein Stück), eine Schere heißt **Naht** (die Folie ist dort offen, gestrichelte Linie). Klick aufs Schild schaltet um. Bei einem Decal, das ums Rohr geht, muss mindestens eine Kante offen bleiben (standardmäßig die unten); alle anderen können verbunden bleiben, Öffnungen dazwischen werden wie Löcher ausgeschnitten. Verbindest du die letzte offene Kante, fragt FitFlat, welche stattdessen offen bleibt (fahr über eine Zeile, dann leuchtet die Kante auf). Alle Kanten offen ergibt zwei einzelne Stücke.
- Eine Form, die auf dem Rohr liegt und Öffnungen an der Mittellinie hat (sie geht nicht ums Rohr herum), ist frei: jede Kante startet verbunden, jede Öffnung wird wie ein Subtract-Loch ausgeschnitten. Mach beliebige Kanten zur Naht, eine, mehrere oder keine; eine Naht öffnet die Folie nur dort.
- Das Messer schneidet auch Nähte: Ein Schnitt entlang der Mittellinie teilt ein verbundenes Decal in seine zwei Seiten, und sie bleiben getrennt, bis du **Verbinden** drückst.
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

Wähl ein Decal und klick dann mit **Shift** weitere an (am Modell oder in der Liste). Die zusätzlichen werden blau, und das **Optionen**-Feld zeigt den ersten Namen und wie viele andere, darunter die Knöpfe.

- **Vereinigen** verbindet alle zu einer Form.
- **Abziehen** schneidet alle blauen Formen aus der ersten aus (**Tauschen** wechselt, welche ausgeschnitten wird).
- **Schnittmenge** behält nur die Fläche, die alle gemeinsam haben.

Nach jeder Kombination fragt FitFlat:

- **Bearbeitbar lassen**: Die Originale bleiben im Ergebnis. Wähl das kombinierte Teil, dann erscheinen seine Teile darunter in der Liste (und als dünne Linien am Modell); ändere eins, und das Ergebnis zieht mit. **Anwenden** in der Zeile legt es fest, **Trennen** holt die Originale zurück. Wer die Punkte des kombinierten Teils selbst bearbeitet, legt es damit ebenfalls fest.
- **Anwenden**: Das Ergebnis wird sofort eine normale Kontur.

Mit **Nicht mehr fragen** bleibt deine Wahl. Neue Punkte entstehen nur dort, wo sich Konturen kreuzen. Formen mit Löchern (wie ein Donut) bleiben ein Decal mit Loch. Im Spiegelmodus werden die gezeichneten Hälften kombiniert, und das Ergebnis bleibt gespiegelt, damit beide Seiten passen.

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

- ein lila **Falten**-Etikett — das flache Teil ist irgendwo größer als der Rahmen: dort hat die Folie zu viel Material und kann Falten werfen.

**Dehnung** in der Ansichtsleiste färbt jedes Decal auf dem Modell und jedes Teil auf dem Bogen in zwei Skalen: grün → gelb → rot, wo sich die Folie **dehnen** muss, grün → hellblau → dunkelblau, wo sie zu viel Material hat und **Falten** werfen kann. Falten zählen ab der halben Dehnungsgrenze, weil Folie sie schlechter verträgt. Falten gehören zu Wölbungen: eine V-Kerbe oder **Folie auf Spannung** nimmt sie heraus.

Schaltflächen in der Zeile: **Spiegeln**, **Anwenden** (Spiegelung), **Umkehren** (die Folie deckt die Fläche außerhalb der Kontur statt innerhalb, z. B. um ein Rohrende), **Lösen** (ein Loch zu einem eigenen Teil machen), **Duplizieren**, **🔒 Sperren**, **Löschen**.

**Duplizieren** (oder **Strg+D**) kopiert das Decal mit seinen Löchern und der Spiegel-Einstellung und legt die Kopie direkt daneben auf die Fläche, auf derselben Seite der Spiegelebene. Die Kopie ist ausgewählt, du kannst sie also gleich mit dem Gizmo an ihren Platz ziehen. Weiteres Duplizieren reiht weitere Kopien auf.

**Vorgeschlagene Schnitte** erscheinen, wenn ein Decal irgendwo zu viel Folie hat. FitFlat sucht die gespannten Stellen am abgewickelten (flachen) Decal und plant dort jeden Schnitt als geraden Schnitt vom Rand, im rechten Winkel, wie auf einem vorgeschnittenen Kit-Bogen. Sie erscheinen als rot gestrichelte Linien auf dem Bogen (und am Modell, solange das Messer aktiv ist):
- **V-Kerbe** (rotes Schild, z. B. *V 9°*), wo die Folie zu groß ist und Falten werfen würde, typisch an Wölbungen und Rohrenden. Die Folie bekommt einen Schnitt vom Rand, der sich auf dem Schneidbogen zu einem sauberen V öffnet und sich am Rahmen wieder schließt; es bleibt nichts frei.
- **Sättel bekommen keinen Vorschlag.** Wo der Rahmen sattelförmig ist, etwa an der Hohlkehle zwischen zwei Rohren, braucht er mehr Folie, als ein flacher Bogen hat: ein V nimmt nur Folie weg und ein Schlitz ließe eine Lücke. Dort kommt der Rand etwas kürzer heraus und wird beim Aufbringen gedehnt (rot). Wenn das mehr ist, als deine Folie aushält, teil das Decal dort selbst mit dem Messer.

Jedes V-Kerben-Schild zeigt die Öffnung des V in Grad und seine Breite am Rand in mm, und das V ist am Modell eingezeichnet. Klick auf einen Vorschlag auf dem Bogen setzt diesen Schnitt. **Jeder Schnitt schließt sich am Rahmen:** beide Seiten des V treffen beim Aufbringen wieder zusammen, es bleibt nichts frei. Auf dem Bogen öffnet er sich als V, und die Breite dieses V ist die Folie, die herauskommt. FitFlat wählt die Breite für jeden neuen Schnitt, indem es mehrere probiert und die nimmt, die rundherum am wenigsten Dehnung und Überschuss lässt, gemessen an den Grenzen der Folie. Selbst ändern auf dem Bogen: den gelben Punkt an der Ecke des V ziehen, um es zu öffnen oder zu schließen (die Beschriftung zeigt die Basis des V, die Folie, die am Rand herauskommt, in mm; ganz zu ist ein einfacher Schlitz). Die Farben zeigen das Ergebnis sofort: zu schmal lässt Rot (Dehnung), zu breit nimmt zu viel weg und wird blau (Überschuss). Eine V-Kerbe selbst setzen: mit dem **Messer** eine Linie zeichnen, die knapp außerhalb des Decals beginnt und innen aufhört, dann Schnitt anwenden (Enter), oder auf dem Bogen schneiden (siehe Bogen). Bei gespiegelten Decals kommen die Schnitte paarweise gespiegelt und gleich breit: geplant auf deiner Seite, auf die andere übertragen. Jeder Schnitt endet in einem kleinen runden Loch (Teil derselben Schnittlinie), damit die Folie nicht weiterreißt, und ein vorgeschlagener Schnitt bleibt nur, wenn er die Dehnung an seiner Stelle wirklich senkt; die Meldung sagt, um wie viel, und welche Vorschläge weggelassen wurden. **Schnitte bearbeiten:** wähle das Decal im Bearbeiten-Modus, dann bekommt jeder Schnitt Griffe: das **Quadrat** ziehen verschiebt den Anfang am Rand, das **runde** Ende ziehen ändert Länge und Richtung (auf dem Bogen bleibt der Schnitt gerade; seine Breite wird neu gewählt), **×** löscht ihn. Bei gespiegelten Decals folgt das Spiegelbild. Jede Änderung lässt sich rückgängig machen (Strg+Z); **Schnitte entfernen** in der Liste nimmt alle heraus.

**Sperren** macht ein Decal auf dem Modell nicht mehr auswählbar und bearbeitbar, damit du darüber zeichnen kannst. Das Messer lässt gesperrte Decals in Ruhe.

### Verlauf
**Verlauf** in der Seitenleiste listet jeden Schritt mit Namen und Uhrzeit. Klick auf einen Schritt, um dorthin zurück- oder wieder vorzugehen; Strg+Z / Strg+Umschalt+Z funktionieren wie gewohnt.

---

## 12. Bogen und Export

- **Breite, Höhe, Abstand** des Bogens in mm. Die Vorschau zeigt, wie die Teile angeordnet sind und wie viele es sind.
- **Dehnungskarte im Export:** **Dehnungskarte** in den Bogen-Einstellungen anhaken, dann bekommt die SVG eine zusätzliche Ebene unter den Schnittlinien: jedes Teil in seinen Farben für Dehnung und Überschuss, die vorgeschlagenen V-Kerben rot gestrichelt und eine Legende unter dem Bogen mit Folie und Grenzen. In Illustrator, Inkscape oder Affinity öffnen, um Schnitte von Hand zu planen. Die Ebene vor dem Schneiden ausblenden oder löschen.
- **Vorgeschlagene Schnitte erscheinen auf dem flachen Bogen** (für das ausgewählte Decal oder alle Decals bei eingeschalteter Dehnung) und als gestrichelte Linien am Modell, solange das **Messer** aktiv ist, damit du an ihnen entlang schneiden kannst. Klick auf einen auf dem Bogen setzt ihn.
- **Auf dem Bogen schneiden (✂):** mit aktiver Schere vom Rand eines Teils hineinziehen setzt dort einen Entlastungsschnitt, oder klick einen der gestrichelten Vorschläge an. FitFlat schneidet am Rahmen, wickelt neu ab und zeigt das Ergebnis auf dem Bogen und am Modell, wo du ihn im Bearbeiten-Modus mit seinen Griffen anpassen kannst. Strg+Z macht ihn rückgängig. Jeder Schnitt öffnet sich auf dem Bogen als V und schließt sich am Rahmen; bei aktiver Schere (oder ausgewähltem Decal) hat seine Ecke einen gelben Punkt: ziehen macht das V breiter oder schmaler, bis zum einfachen Schlitz.
- **Zoom:** über der Vorschau scrollen zoomt dort, wo der Zeiger ist, Ziehen verschiebt, Doppelklick (oder **Alles**) zeigt wieder den ganzen Bogen. **⤢** öffnet eine große Ansicht über den Bildschirm; Esc schließt sie.
- **Namen beschriften**, **Bogenumriss**, **Teile spiegeln** (zum Schneiden von der Rückseite).
- **Saubere Kurven** exportiert glatte Bézierkurven mit wenigen Knoten. **±** legt fest, wie weit exportierte Kurven von der abgewickelten Kontur abweichen dürfen (Standard 0,1 mm); höher ergibt weniger, glattere Knoten.
- **Rolle** — von der Rolle schneiden: der Bogen wird so lang, wie die Teile es brauchen; die Höhe wird ignoriert.
- **Passermarken** — drei Print-and-Cut-Marken in den Ecken; die Teile halten Abstand davon.
- **Entgitterrahmen** — ein Schnittrahmen um jedes Teil und den Bogen, damit sich die Restfolie in Streifen abziehen lässt.
- **SVG** oder **DXF herunterladen**. Schnittlinien liegen in Millimetern auf der Ebene `cut`; Beschriftungen, Bogenumriss, Passermarken und Entgitterrahmen liegen auf eigenen Ebenen, damit du sie in der Plotter-Software ausblenden oder nutzen kannst.

Die Vorschau zeigt Bogengröße, Anzahl der Teile, wie viel Folie genutzt wird und die Fläche. Mit **Dehnung** an sind auch die flachen Teile nach Dehnung eingefärbt.

Ist ein Teil größer als der Bogen, vergrößere den Bogen oder teile das Decal.

### Folie
Wähle unter **Folie** deine Folie (PPF glänzend oder matt, gegossene oder kalandrierte Folie, oder Eigene) und stell die **Max. Dehnung** ein. Die Dehnungsfarben, die Etiketten in der Liste und die Vorschläge für Entlastungsschnitte nutzen diese Grenze. Die Voreinstellungen sind Startwerte; prüfe das Datenblatt deiner Folie.

Die **Kontur ist nie länger als am Rahmen.** Zu lange Folie am Rand würde Falten werfen, daher behält der Rand bei Wölbungen seine echte Länge und die überschüssige Folie erscheint als Überschuss (blau), die Stelle für eine V-Kerbe: ihre Basis ist die Folie, die herauskommt. Bei sattelförmigen Stellen darf der Rand etwas kürzer als am Rahmen herauskommen, innerhalb der Dehngrenze der Folie, und der Monteur dehnt ihn bis zur Linie (Rot am Rand statt falschem Blau innen). Mit ausgeschaltetem **Folie straff ziehen** behält die Kontur überall genau ihre echte Länge.

**Folie auf Spannung** (standardmäßig an) wickelt so ab, wie ein Folierer die Folie aufbringt: wo der Rahmen gewölbt ist, darf das Schnittteil etwas kleiner als die Fläche werden (bis 60 % der max. Dehnung), nie größer. Die Wölbung geht dann in Spannung, die die Folie verträgt, statt in überschüssige Folie, die Falten wirft. Gerade Rohre bleiben maßhaltig. Ausschalten für exakte Maße überall.

### Größen (Gradierung)
Bei Rahmen aus einer Geometrie-Voreinstellung oder Tabelle mit mehreren Größen listet **Größen** sie auf. Zeichne die Decals einmal auf einer Größe; sie werden entlang jedes Rohrs auf die anderen Größen übertragen — **mit gleichem Abstand zum näheren Rohrende** (an den Verbindungen bleiben sie, wo sie sind) oder **mit der Rohrlänge skaliert**. **Größe zeigen** lädt eine andere Größe mit den übertragenen Decals. **Alle Größen herunterladen** wickelt die Decals für jede angehakte Größe ab und speichert ein SVG mit einem beschrifteten Block je Größe, oder **eine Datei je Größe**.

---

## 13. Projekte speichern

Deine Arbeit wird **in diesem Browser** (auf diesem Computer) gespeichert. Der Projektname in der oberen Leiste zeigt einen Punkt, solange es ungespeicherte Änderungen gibt; ein Klick darauf öffnet **Projekte**.

- **Speichern** (Strg+S) speichert das Projekt unter Projekte; beim ersten Mal fragt es nach einem Namen. **Aktuelles als neu speichern** in Projekte behält eine eigene Kopie.
- **Projekte** listet deine gespeicherten Projekte mit Bild, Rahmen und Anzahl der Decals. Suchen und sortieren; **Öffnen**, **Umbenennen**, **Duplizieren**, **Herunterladen** (eine `.json`-Datei) oder **Löschen**.
- **Automatisch speichern**: eine Kopie wird als *Letzte Sitzung* etwa zwei Sekunden nach jeder Änderung gespeichert, beim Wechsel weg vom Tab oder beim Schließen und alle halbe Minute. Nach einem Neuladen oder Absturz bietet FitFlat sie sofort an: **Wiederherstellen** holt sie zurück (sie bleibt auch in Projekte). Neuladen oder Schließen mit ungespeicherten Änderungen lässt den Browser erst nachfragen (*Seite verlassen?*), und ein Rechtsklick in FitFlat öffnet nicht mehr das Browsermenü mit seinem *Neu laden*.
- **Vorlagen** sind ein Rahmen mit den Decals, die du darauf immer verwendest (zum Beispiel für ein Radmodell). **Aktuelles als Vorlage speichern**, dann öffnet **Neu daraus** eine Kopie als neues Projekt; die Vorlage selbst bleibt unverändert.
- **Decal-Vorlagen** sind einzelne Decals, gespeichert mit *In Bibliothek speichern* im Decal-Panel. **Platziere** eine auf jedem Rahmen wie SVG-Grafik: über das Modell fahren, klicken, anpassen, Anwenden. Lade alle Decal-Vorlagen als eine Datei herunter oder füge Vorlagen aus so einer Datei hinzu.
- **Herunterladen** speichert eine Vorlage als SVG-Datei in mm, **Alle herunterladen** alle in einer Datei, **Aus Dateien hinzufügen…** lädt SVG-Dateien (je mit geschlossenen Umrissen, in mm) oder eine solche Datei.
- **Vorlagenordner…** (im Tab Decal-Vorlagen) lädt und speichert Vorlagen in einem eigenen Ordner, z. B. einem gemeinsamen Ordner im Firmennetz, getrennt vom Ort deiner Projekte. Jede Vorlage dort ist eine SVG-Datei, und jede SVG, die du in den Ordner kopierst, erscheint als Vorlage. **Diesen Ordner nicht mehr nutzen** speichert Vorlagen wieder bei den Projekten.
- **Öffnen** in der oberen Leiste öffnet weiterhin Dateien: Modelle (.glb, .obj, .stl), Projekte (.json) und SVG-Grafik.

Der Browserspeicher gehört zu diesem Browser auf diesem Computer. Um Arbeit auf einen anderen Computer zu bringen oder als Sicherung, nutze **Herunterladen** und öffne die Datei dort.

### Projekte in einem Ordner speichern

Standardmäßig bleibt alles im Browser. In **Projekte** speichert **Ordner verwenden …** Projekte, Startpunkte und Decal-Vorlagen stattdessen als Dateien in einem Ordner deiner Wahl: auf der Festplatte, auf einem USB-Stick oder auf einem Netzlaufwerk der Firma.

- Jedes Projekt ist eine `.fitflat.json`-Datei mit dem Projektnamen; sie lässt sich auch mit **Öffnen** laden. Startpunkte landen im Unterordner *Starting points*, die letzte Sitzung in *Autosave*, Decal-Vorlagen in *FitFlat templates.json*.
- Umbenennen, Duplizieren und Löschen in Projekte ändern die Dateien im Ordner.
- **Browser-Projekte hierher kopieren** kopiert, was du im Browser gespeichert hast, in den Ordner. **Diesen Browser verwenden** schaltet zurück; der Ordner bleibt, wie er ist.
- Der Browser fragt einmal um Erlaubnis, den Ordner zu nutzen. Nach einem Neustart fragt er eventuell erneut: Projekte öffnen und **Wieder verbinden** klicken.
- Ordner funktionieren in Chrome und Edge. Firefox und Safari speichern Projekte im Browser; dort Herunterladen und Öffnen nutzen.

---

## 14. Panels und Sprache

- Jedes Panel hat einen **Griff** (⋮⋮) und eine **Nadel**. Zieh ein Panel an eine beliebige Stelle; leg es nahe einem Rand oder in einer Ecke ab, um es dort anzuheften. Die Nadel löst ein angeheftetes Panel oder heftet ein freies am nächsten Rand an.
- Panels überlappen sich nie: ein Panel im Weg weicht aus. Leg ein Panel neben ein anderes, und es rastet daran ein, so kannst du Panels stapeln.
- Jedes Panel hat eine **Dreh**-Taste, um zwischen Zeile und Spalte zu wechseln, und eine **Einklapp**-Taste (⌄), die es auf seinen Namen zusammenklappt; ein weiterer Klick öffnet es wieder.
- Am linken oder rechten Rand angeheftet steht ein Panel als Spalte, oben oder unten liegt es als Zeile (außer du hast es selbst gedreht).
- **Layout** in der oberen Leiste wechselt zwischen Panel-Anordnungen: *Zeichnen*, *Bearbeiten* und *Aufgeräumt*. Ordne die Panels nach Wunsch an und wähle *Aktuelle behalten…*, um diese Anordnung in der gezeigten zu speichern.
- **Panels zurücksetzen** (im Ansicht-Panel) stellt alles wieder her. Dein Layout wird gespeichert.
- **EN | DE** wechselt die Sprache. Deutschsprachige Browser starten auf Deutsch.

---

## 15. Tastenkürzel

| Taste | Aktion |
|---|---|
| D / V / K | Zeichnen / Bearbeiten / Messer |
| Strg+Z / Strg+Umschalt+Z (Strg+Y) | Rückgängig / Wiederholen |
| Enter | Form schließen · Messerschnitt anwenden · Platzierung anwenden |
| Esc | Zeichnen beenden · Messer löschen · Abbrechen |
| Rücktaste / Entf | Ausgewählte Punkte löschen · letzten Messer- oder Konturpunkt entfernen |
| Strg+A | Alle Punkte des Decals auswählen |
| Strg+D | Ausgewähltes Decal duplizieren |
| M | Ausgewählte Punkte zusammenführen |
| F | Auf Auswahl zoomen |
| L | Live-Abwicklung an / aus |
| U oder Umschalt+Leertaste | Geänderte Decals abwickeln (bei ausgeschalteter Live-Abwicklung) |
| Pfeiltasten (Umschalt) | Ausgewählte Punkte schieben |
| X / Y / Z (beim Ziehen) | Bewegung auf eine Achse sperren |
| Strg + Scrollen / Alt + Scrollen | Decal oder Auswahl drehen / skalieren (Umschalt: größere Schritte) |
| Alt + Scrollen / Ziehen (in Bearbeiten nichts ausgewählt) | Präzision: Ansicht mit einem Fünftel der Geschwindigkeit zoomen, drehen und verschieben |
| T | Messer: Durchschneiden an/aus |
| Q | Spiegel: Naht-Fang an/aus |
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
