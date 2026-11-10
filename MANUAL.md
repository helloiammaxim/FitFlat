# FitFlat — Manual

**[Deutsche Version](MANUAL.de.md)**

FitFlat is a browser tool for making bicycle frame protection film. You draw the decals directly on a 3D frame; the tool unwraps each one flat without distortion, packs the pieces on a sheet and exports an SVG for your plotter or cutter.

Open `index.html` in a current browser (Chrome, Edge, Safari, Firefox). Nothing to install. Your work stays on your computer.

---

## Contents

1. [The screen](#1-the-screen)
2. [Getting a frame](#2-getting-a-frame)
3. [Moving around the 3D view](#3-moving-around-the-3d-view)
4. [Drawing decals](#4-drawing-decals)
5. [Editing points](#5-editing-points)
6. [Moving, turning and sizing](#6-moving-turning-and-sizing)
7. [Mirror mode](#7-mirror-mode)
8. [Knife](#8-knife)
9. [Combining decals](#9-combining-decals)
10. [Importing SVG artwork](#10-importing-svg-artwork)
11. [The decal list](#11-the-decal-list)
12. [Sheet and export](#12-sheet-and-export)
13. [Saving projects](#13-saving-projects)
14. [Panels and language](#14-panels-and-language)
15. [Keyboard shortcuts](#15-keyboard-shortcuts)
16. [Tips and troubleshooting](#16-tips-and-troubleshooting)

---

## 1. The screen

- **Top bar** — language (EN | DE), *Frame from geometry*, model units, and the file buttons *New*, *Open*, *Import SVG*, *Save*.
- **Tools panel** (left) — *Draw*, *Edit*, *Knife*.
- **Tool options** (top) — undo/redo and the options of the current tool, plus *Mirror*.
- **View panel** — everything about the view in one place: *Look from*, *Turn*, *Ortho*, *Fit*, *Stretch*, frame opacity, *Grid* settings and *Saved views*.
- **Point bar** — appears in Edit mode: point types and point tools, *Move along*, *Turn around*.
- **Tips** (bottom left) — tells you what the next click does. Fold it away with the ⓘ button.
- **Right side** — the cut sheet preview, the decal list, sheet settings and *Download SVG*.

---

## 2. Getting a frame

### Open your own model
**Open** a `.glb`, `.gltf`, `.obj` or `.stl` file, or drop it onto the 3D view. A **Check the model size** window shows the model's size in millimetres, centimetres, metres and inches, with the detected unit marked — pick the one that gives the real size. Everything (decals, stretch, the cut sheet) is measured from it, and a wrong unit also makes zooming feel wrong. You can change it later with *Model units* in the top bar. STL files are read Z-up, the way Blender and CAD programs export them.

The real frame model gives the most accurate production patterns.

### Build a frame from geometry
**Frame from geometry** builds a frame from numbers:

- Pick a **preset** (road, endurance, gravel, MTB, carbon and aero types) and a **size**, or type your own values: stack, reach, head and seat angles, head tube, seat tube, top tube slope, chainstay, BB drop, front-centre or fork length and offset.
- **Tube shape and diameters** — round, carbon oval or aero, the section from circle to square, and every tube diameter.
- **Paste a geometry chart** — copy the geometry table from a brand website and paste it; the sizes and measurements are recognised and saved as your own preset.
- The *Resulting frame* line shows wheelbase, front-centre, effective top tube and trail as a check.
- **Move my decals onto the new frame** keeps your work when you change the size.

Use a generated frame for layout and sizing; for production cuts use the real frame model.

**New** starts over with the start frame.

---

## 3. Moving around the 3D view

- **Turn:** drag the background, or hold Alt or Space and drag (also over the model).
- **Pan:** right-drag.
- **Zoom:** scroll — it zooms around the point under the cursor — or middle-drag. A trackpad pinch zooms too.
- **View panel:** *Look from* Front, Back, Left, Right, Top, Bottom; *Turn* by 45°; and **Saved views** (turn the model to an angle you like and click *Save view*).
- **Ortho** switches to an orthographic view (no perspective) — good with the axis views for exact layouts.
- **Grid** shows a grid and can snap points to it (2.5D: the grid sets the position in the plane, the frame surface gives the depth). Set the step, the plane and *Snap* in the Grid part of the View panel.
- **Frame opacity** makes the frame see-through so you can see decals on the far side (Alt+Z toggles).
- **Fit** shows the whole frame.

Z is the vertical axis. X runs front to back along the bike, Y side to side.

### Reference image
In the View panel, **Reference image → Load…** puts a photo of the real frame over the view. Drag it by its middle, size it by the corner (Alt turns it) and set its opacity. Line the 3D view up with the photo, then click **Stick to model**: the photo is projected onto the frame from that view and stays on the tubes when you turn the model, so you can trace paint lines, logos and cable ports. **Unstick** brings the overlay back, **Remove** clears it.

---

## 4. Drawing decals

Choose **Draw**. The shape buttons are **Pen**, **Rect**, **Circle**, **Polygon** and **Pill**.

### Pen
- **Click** on the model to place points. By default points join with straight lines (*Straight*); choose *Curved* for smooth curves. You can double-click a point later to switch it between curve and corner.
- **Press and drag** to sketch a freehand outline.
- **Close the shape** by clicking the yellow first point, pressing Enter, or *Close shape*. Esc stops drawing and leaves the line open; click it later to continue.
- **Start off the model:** click next to the model and keep clicking around the tube, on or off it. The line is drawn in the view and, when you close it, projected onto the visible surface. Where the line runs off the model the decal follows the tube's edge. Dragging off the model draws freehand and does not turn the view; use Space + drag to turn it while drawing. Backspace removes the last point, Esc cancels.

### Rect, Circle, Polygon
- **Drag** to draw. The size in mm is shown while you drag.
- Rect: Shift makes a square, Alt draws from the centre. Circle: Shift drags from edge to edge. Polygon: set the number of **Sides** (3–64); the drag direction sets the rotation.
- **r** rounds the corners of rectangles and polygons.
- **Pill** (a stadium with round ends): drag its length and width (Alt from the centre), or set **L × W** in mm in the toolbar and click on the model to place one at exactly that size.
- Shapes are projected from your view onto the surface — turn the view to line them up with a tube. They may extend past the tube; the decal stops at the tube's edge.
- **Centre on mirror** (mirror mode only) snaps the shape's centre onto the centre plane, so it sits exactly in the middle.

After drawing, each decal is unwrapped flat automatically. The stretch badge in the list tells you how well it lies.

---

## 5. Editing points

Choose **Edit** and click a decal to select it.

### Selecting
- Click a point to select it. Shift-click adds or removes points; Shift-drag draws a selection box. Ctrl+A selects all points of the decal.
- **F** zooms to the selection.

### Changing the outline
- **Drag** points to move them; hold Shift for fine moves; arrow keys nudge.
- **Ctrl-click** on the line or the model adds a point; **Alt-click** a point deletes it.
- Drop a point onto its neighbour to merge them, or select several and press **M** (*Merge*).
- **Delete** removes the selected points.
- **Split:** two points selected — split the outline between them; one point — open the outline there.

### Point types
- **Auto** — handles follow the neighbouring points (smooth, automatic).
- **Smooth** — editable handles that stay in line.
- **Broken** — handles move independently, for a kink.
- **Corner** — sharp corner without handles.

Drag the pink handles to bend the curve; Alt-drag breaks them apart.

### Point tools
- **Smooth curve / Smooth all** — evens out wobbly points and gives them automatic handles. Click again to smooth more.
- **Round corners / Round all** with radius **r** in mm.
- **Simplify / Simplify all** with tolerance **±** in mm — removes points the shape does not need (decimate). Useful after freehand drawing or SVG import.

---

## 6. Moving, turning and sizing

In Edit mode the selected decal shows a **gizmo**:

- **Centre handle** — drag to move.
- **Knob** (or the dashed ring) — drag to turn. Shift: 15° steps.
- **Corner squares** — drag to size. Shift: 5% steps.

You can also drag inside the selected decal to move it, use **Ctrl + scroll** to turn and **Alt + scroll** to size.

With **two or more points selected**, the gizmo and the scroll shortcuts act on just those points.

**Measurements.** While you drag, a label next to the pointer shows the numbers: for a decal, how far it moved along the surface, the angle, the size in % and its flat size in mm; for a point, how far it moved (with the X / Y / Z parts) and the distance to its neighbouring points; for a handle, its length. While drawing with the Pen, the label shows the length of the next segment and of the whole line.

### Move along
*Free | X | Y | Z* in the point bar. Free moves over the surface; X, Y or Z locks the move to that axis (a dashed guide line shows it). While dragging a decal or points you can press **X**, **Y** or **Z** to lock, and the same key again to free it.

### Turn around
*View | Surface | X | Y | Z* in the point bar.

- **View** — turns the decal as you see it, around the line of sight, and lays it back on the surface.
- **Surface** — turns it on the surface around the surface normal at its centre. Keeps the true size.
- **X / Y / Z** — turns it around that world axis through the middle of the tube under it. Turning around the tube's own axis slides the decal around the tube.

Moving and *Surface* turning keep the decal's real size on a tube. *View*, *X*, *Y* and *Z* project the decal back onto the surface, which can change its real size on a curved tube — check the stretch badge.

### The Decal panel
In Edit mode, with a closed decal selected, the **Decal** panel lets you type exact values:

- **Move X / Y / Z** — moves the decal by these distances in mm, following the surface.
- **Start / end** (frames made from geometry) — the gap from the decal to each end of the tube it sits on (measured along the tube's centre line). Type a new value to slide the decal along the tube.
- **Turn ° / Size %** — turns (around the axis chosen in *Turn around*) and sizes the decal by the typed amounts.
- **Offset → Grow / Shrink** — moves the whole outline outwards or inwards by the distance, along the surface. Curves stay smooth; corners stay sharp.
- **Snap to decals** with a **gap** — while you drag a decal, its edge snaps to a neighbouring decal at exactly that gap and slides along it. Push on through to let go.
- **Save to library** — keeps the decal as a template you can place again on any frame (see *Saving projects*).

---

## 7. Mirror mode

**Mirror** is on by default. Decals get a mirrored copy on the other side of the frame.

- **Plane** chooses the mirror plane (auto, left | right, front | back, top | bottom).
- Points near the pink centre plane snap to it. **Snap** sets the distance in mm (0 snaps only when you drag across the plane).
- A decal that starts and ends on the centre plane becomes **one symmetric decal** across the middle — you edit one half, the other follows.
- A shape or pen outline that crosses the centre plane is cut there and becomes a symmetric decal (no overlapping copies).
- **Apply** (in the decal list) turns the mirrored part into a real outline you can edit separately.

---

## 8. Knife

Choose **Knife** and click points in the view — on or off the model.

- A line **across a decal** splits it. Draw past the edges.
- Click the **first point again** to close a loop: *Apply cut* cuts that area out of the decals it overlaps, or leaves a hole if it lies inside one.
- **Cut through** (on by default, key **T**) cuts every surface under the line, front and back. Off: only the visible side.
- In mirror mode cuts are mirrored to the other side; a cut that starts or ends at the centre line continues across it.
- **Apply cut** (Enter) applies it, **Clear** (Esc) removes the line, Backspace removes the last knife point.
- Locked decals are not cut.

---

## 9. Combining decals

Select a decal, then **Shift-click** a second one (on the model or in the list). The second shows in blue, and the **Options** panel shows both names with the buttons below.

- **Union** joins both shapes.
- **Subtract** cuts the blue shape out of the first one (**Swap** switches which is cut out of which).
- **Intersect** keeps only the overlap.

New points are added only where the outlines cross. Shapes with holes (like a donut) are kept as a decal with a hole. Booleans also work in mirror mode.

---

## 10. Importing SVG artwork

**Import SVG** (or drop an `.svg`). Each closed shape becomes an editable decal; holes are kept.

1. Set the real **width/height** (keep proportions) and **rotation**.
2. Choose **Wrap onto the surface** (keeps true sizes, like film laid on the tube — best for decals) or **Project from the view** (looks right from this angle but stretches on curves).
3. Optionally **mirror** to the other side.
4. Move over the model to see the orange preview, click to place it. Alt + scroll sizes, Ctrl + scroll turns (Shift for bigger steps, snapping to the steps you choose). **Apply** (Enter) adds it; click elsewhere to move it.

Convert live text to outlines in your design app first.

---

## 11. The decal list

Each row shows the decal's name (click to rename), its flat size in mm and its **stretch**:

- green — lies flat without stretching;
- amber — slight stretch, usually fine for film;
- red — the film may wrinkle; add a relief cut or split the decal.

**Stretch** in the view bar colours each decal on the model by how much the film has to stretch.

Row buttons: **Mirror**, **Apply** (mirror), **Invert** (the film covers the area outside the outline instead of inside, e.g. around a tube end), **Detach** (make a hole a separate piece), **Duplicate**, **🔒 Lock**, **Delete**.

**Duplicate** (or **Ctrl+D**) copies the decal with its holes and mirror setting and puts the copy right next to it on the surface, on the same side of the mirror. The copy is selected, so you can drag it into place with the gizmo straight away. Duplicating again lines up further copies.

**Relief cuts** appears when a decal stretches too much (red). It cuts small V-notches from the edge into the most stretched areas so the film can lie flat. Turn on **Stretch** in the view bar to see the suggested cuts as red dashed lines first. For strongly curved areas, splitting the decal with the Knife often helps more.

**Lock** makes a decal unselectable and uneditable on the model, so you can draw over it. The Knife leaves locked decals alone.

### History
**History** in the sidebar lists every step with its name and time. Click a step to go back to it, or forward again; Ctrl+Z / Ctrl+Shift+Z still work as usual.

---

## 12. Sheet and export

- **Width, Height, Gap** of the sheet in mm. The preview shows how the pieces are packed and how many there are.
- **Name labels**, **Sheet outline**, **Mirror pieces** (for cutting from the back).
- **Clean curves** exports smooth Bézier curves with few nodes. **±** sets how far exported curves may stray from the unwrapped outline (default 0.1 mm); higher gives fewer, smoother nodes.
- **Roll** — cut from a roll: the sheet gets as long as the pieces need; Height is ignored.
- **Registration marks** — three print-and-cut marks in the corners; pieces keep clear of them.
- **Weeding boxes** — a cut box around each piece and the sheet, so the waste film comes off in strips.
- **Download SVG** or **DXF**. Cut lines are on a `cut` layer in millimetres; labels, the sheet outline, registration marks and weeding boxes are on their own layers so you can hide or use them in the cutter software.

The preview shows the sheet size, the number of pieces, how much of the film is used and the area. With **Stretch** on, the flat pieces are coloured by stretch too.

If a piece is larger than the sheet, increase the sheet or split the decal.

### Film
Pick your film in **Film** (PPF gloss or matte, cast or calendered vinyl, or Custom) and set its **Max stretch**. The stretch colours, the badges in the list and the relief-cut suggestions all use this limit. The presets are starting points; check your film's data sheet.

### Sizes (grading)
For frames built from a geometry preset or chart with several sizes, **Sizes** lists them. Draw the decals once on one size; they are moved onto the other sizes along each tube — **keeping the gap to the nearer tube end** (decals stay put at the joints) or **scaling with the tube length**. **Show size** loads another size with the decals moved onto it. **Download all sizes** unwraps the decals on every ticked size and saves one SVG with a labelled block per size, or **one file per size**.

---

## 13. Saving projects

Your work is kept **in this browser** (on this computer). The project name in the top bar shows a dot while there are unsaved changes; click it to open **Projects**.

- **Save** (Ctrl+S) saves the project under Projects; the first time it asks for a name. **Save current as new** in Projects keeps a separate copy.
- **Projects** lists your saved projects with a picture, the frame and the number of decals. Search and sort them; **Open**, **Rename**, **Duplicate**, **Download** (a `.json` file) or **Delete**.
- **Autosave**: while you work, a copy is saved every half minute as *Last session*, so nothing is lost if the browser closes.
- **Starting points** are a frame with the decals you always use on it (for example one bike model). **Save current as starting point**, then **New from it** opens a copy as a new project; the starting point itself never changes.
- **Decal templates** are single decals saved with *Save to library* in the Decal panel. **Place** one on any frame like SVG artwork: move over the model, click, adjust, Apply. Download all templates as one file, or add templates from such a file.
- **Open** in the top bar still opens files: models (.glb, .obj, .stl), projects (.json) and SVG artwork.

Browser storage belongs to this browser on this computer. To move work to another computer, or as a backup, use **Download** and open the file there.

---

## 14. Panels and language

- Every panel has a **grip** (⋮⋮) and a **pin**. Drag a panel anywhere; drop it near an edge or a corner to pin it there. The pin button frees a pinned panel or pins a floating one to the nearest edge.
- Panels never overlap: a panel that is in the way moves aside. Drop a panel next to another one and it snaps to it, so you can stack panels.
- Every panel has a **turn** button to switch between a row and a column, and a **collapse** button (⌄) that folds it down to its name; click it again to open the panel.
- Pinned to the left or right edge, a panel stands as a column; pinned to the top or bottom, it lies along a row (unless you turned it yourself).
- **Layout** in the top bar switches between panel arrangements: *Drawing*, *Editing* and *Clean*. Arrange the panels as you like and choose *Keep current…* to store that arrangement in the layout shown.
- **Reset panels** (in the View panel) puts everything back. Your layout is remembered.
- **EN | DE** switches the language. German browsers start in German.

---

## 15. Keyboard shortcuts

| Key | Action |
|---|---|
| Ctrl+Z / Ctrl+Shift+Z (Ctrl+Y) | Undo / redo |
| Enter | Close shape · apply knife cut · apply placement |
| Esc | Stop drawing · clear knife · cancel |
| Backspace / Delete | Delete selected points · remove last knife or outline point |
| Ctrl+A | Select all points of the decal |
| Ctrl+D | Duplicate the selected decal |
| M | Merge selected points |
| F | Zoom to selection |
| Arrow keys (Shift) | Nudge selected points |
| X / Y / Z (while dragging) | Lock the move to an axis |
| Ctrl + scroll / Alt + scroll | Turn / size the decal or selection (Shift: bigger steps) |
| T | Knife: cut through on/off |
| 1 / 3 / 7 | Right / front / top view (Ctrl: left / back / bottom) |
| 4 / 6, 8 / 2 | Turn / tilt the view by 45° |
| 5 | Perspective / ortho |
| 0 (Home) | Fit the frame |
| G | Grid on/off |
| Alt+Z | Frame see-through on/off |
| R, [ , ] | SVG placement: rotate, smaller, larger |
| Space + drag | Turn the view (also over the model) |

On a Mac use ⌘ instead of Ctrl.

---

## 16. Tips and troubleshooting

- **"The outline jumps onto a separate part of the model"** — keep each decal on one connected surface (one tube).
- **"This shape wraps all the way around a tube"** — leave a small gap so the film can lie flat.
- **High stretch (red)** — turn on *Stretch* to see where relief cuts belong, press *Relief cuts* in the list, make the decal narrower around the tube, or split it with the Knife.
- **Model looks tiny or huge, or zooming feels wrong** — the unit is wrong. Choose the right one in *Model units* (top bar) or open the model again.
- **Too many points** — use *Simplify*. For the export, raise the **±** tolerance under *Clean curves*.
- **Can't click a decal because another one is on top** — lock the one in the way.
- **Draw on the far side** — make the frame see-through (Alt+Z), or turn the view.
- The tool runs fully in your browser; nothing is uploaded.

---

© 2026 Max Soldatkin. Free for personal and other noncommercial use under the [PolyForm Noncommercial License 1.0.0](LICENSE.md). Any commercial use needs written permission.
