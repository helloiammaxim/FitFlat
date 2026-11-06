# Decal Studio — Manual

**[Deutsche Version](MANUAL.de.md)**

Decal Studio is a browser tool for making bicycle frame protection film. You draw the decals directly on a 3D frame; the tool unwraps each one flat without distortion, packs the pieces on a sheet and exports an SVG for your plotter or cutter.

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
- **View bar** — *Views*, *Grid*, *Ortho*, *Stretch*, frame opacity, *Fit*.
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
- **Views** menu: *Front, Back, Left, Right, Top, Bottom*, turns by 45°, and **saved views** (turn the model to an angle you like and save it). Pin the Views panel to keep it open.
- **Ortho** switches to an orthographic view (no perspective) — good with the axis views for exact layouts.
- **Grid** shows a grid and can snap points to it (2.5D: the grid sets the position in the plane, the frame surface gives the depth). Choose the grid plane and step in the Grid menu.
- **Frame opacity** makes the frame see-through so you can see decals on the far side (Alt+Z toggles).
- **Fit** shows the whole frame.

Z is the vertical axis. X runs front to back along the bike, Y side to side.

---

## 4. Drawing decals

Choose **Draw**. The shape buttons are **Pen**, **Rect**, **Circle**, **Polygon** and **Pill**.

### Pen
- **Click** on the model to place points. By default points join with straight lines (*Straight*); choose *Curved* for smooth curves. You can double-click a point later to switch it between curve and corner.
- **Press and drag** to sketch a freehand outline.
- **Close the shape** by clicking the yellow first point, pressing Enter, or *Close shape*. Esc stops drawing and leaves the line open; click it later to continue.
- **Start off the model:** click next to the model and keep clicking around the tube, on or off it. The line is drawn in the view and, when you close it, projected onto the visible surface. Where the line runs off the model the decal follows the tube's edge. Backspace removes the last point, Esc cancels.

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

### Move along
*Free | X | Y | Z* in the point bar. Free moves over the surface; X, Y or Z locks the move to that axis (a dashed guide line shows it). While dragging a decal or points you can press **X**, **Y** or **Z** to lock, and the same key again to free it.

### Turn around
*View | Surface | X | Y | Z* in the point bar.

- **View** — turns the decal as you see it, around the line of sight, and lays it back on the surface.
- **Surface** — turns it on the surface around the surface normal at its centre. Keeps the true size.
- **X / Y / Z** — turns it around that world axis through the middle of the tube under it. Turning around the tube's own axis slides the decal around the tube.

Moving and *Surface* turning keep the decal's real size on a tube. *View*, *X*, *Y* and *Z* project the decal back onto the surface, which can change its real size on a curved tube — check the stretch badge.

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

Select a decal, then **Shift-click** a second one (on the model or in the list). The second shows in blue.

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

Row buttons: **Mirror**, **Apply** (mirror), **Swap side** (use the area on the other side of the outline), **Detach** (make a hole a separate piece), **🔒 Lock**, **Delete**.

**Relief cuts** appears when a decal stretches too much (red). It cuts small V-notches from the edge into the most stretched areas so the film can lie flat. Turn on **Stretch** in the view bar to see the suggested cuts as red dashed lines first. For strongly curved areas, splitting the decal with the Knife often helps more.

**Lock** makes a decal unselectable and uneditable on the model, so you can draw over it. The Knife leaves locked decals alone.

---

## 12. Sheet and export

- **Width, Height, Gap** of the sheet in mm. The preview shows how the pieces are packed and how many there are.
- **Name labels**, **Sheet outline**, **Mirror pieces** (for cutting from the back).
- **Clean curves** exports smooth Bézier curves with few nodes. **±** sets how far exported curves may stray from the unwrapped outline (default 0.1 mm); higher gives fewer, smoother nodes.
- **Download SVG**. Cut lines are black paths in millimetres on a `cut` layer; labels and the sheet outline are on their own layers so you can hide them in the cutter software.

If a piece is larger than the sheet, increase the sheet or split the decal.

---

## 13. Saving projects

**Save** writes a `.json` project file with the frame and all decals, views and settings. **Open** a `.json` project to continue. A project saved with a generated frame contains the frame; for your own model, open the model first and then the project if asked.

---

## 14. Panels and language

- Every panel has a **grip** (⋮⋮) and a **pin**. Drag a panel anywhere; drop it near an edge or a corner to pin it there. The pin button frees a pinned panel or pins a floating one to the nearest edge.
- The **Tools** panel has a turn button to switch between a row and a column.
- Menus in a bar open towards the middle of the screen, wherever the bar sits.
- **Reset panels** (in the Views panel) puts everything back. Your layout is remembered.
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
