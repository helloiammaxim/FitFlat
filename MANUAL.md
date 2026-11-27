# FitFlat — Manual

**[Deutsche Version](MANUAL.de.md)**

FitFlat is a browser tool for making bicycle frame protection film. You draw the decals directly on a 3D frame, usually a 3D scan of the real frame; the tool unwraps each one flat without distortion, packs the pieces on a sheet and exports an SVG for your plotter or cutter.

Open `index.html` in a current browser (Chrome, Edge, Safari, Firefox). Nothing to install. Your work stays on your computer.

---

The **?** button at the top starts a short tour that points at the main controls: the 3D view, Draw, Edit and the three tabs Decals, View and Sheet. It appears by itself on your first visit.

## Contents

- [Quick start with a scan](#quick-start-with-a-scan)

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

## Quick start with a scan

1. **Export** the scan from your scanner software as **STL** in millimetres (settings for EXStar Hub and others: [Preparing the model](#preparing-the-model-export-settings)).
2. **Open** it in FitFlat, pick **Millimetres**, press **Auto-align**, and tick **Make symmetric** if you want both sides identical. Then **Open model**.
3. **Draw** the decals on the frame (key **D**). With **Mirror** on, the other side follows.
4. Check the **stretch** colours. Where a piece is red, add the suggested V-notches on the Sheet tab.
5. On the **Sheet** tab pick your film and sheet size, then **Download SVG** (or **DXF**) for your plotter.

No scan yet? **Frame from geometry** builds a frame from a brand's geometry chart ([section 2](#build-a-frame-from-geometry)).

---

## 1. The screen

- **Top bar** — language (EN | DE), colours (*Auto* follows your system's light or dark setting; click for *Light* or *Dark*), *Frame from geometry*, model units, and the file buttons *New*, *Open*, *Import SVG*, *Save*.
- **Tools panel** (left) — *Draw*, *Edit*, *Knife*.
- **Tool options** (top) — undo/redo and the options of the current tool, plus *Mirror*.
- **Tips** (bottom left) — tells you what the next click does. Fold it away with the ⓘ button.
- **Sidebar** (right), with three tabs, so the 3D view stays clear:
  - **Decals** — the decal list; in Edit mode also **Selected decal** (typed move, tube-end gaps, turn, size, offset, snapping, Save to library) and **Points** (point types and point tools, *Move along*, *Turn around*); and **History**.
  - **View** — *Look from*, *Turn*, *Ortho*, *Fit*, *Stretch*, frame opacity, *Grid*, *Reference image* and *Saved views*.
  - **Sheet** — the cut sheet preview, *Sizes*, *Film*, sheet settings and *Download SVG / DXF*.

---

## 2. Getting a frame

### Open your own model
**Open** a `.glb`, `.gltf`, `.obj` or `.stl` file, or drop it onto the 3D view. A **Check the model size** window shows a 3D preview of the model as it will open (front of the bike to the right, standing upright; drag to look around) and its size in millimetres, centimetres, metres and inches, with the detected unit marked — pick the one that gives the real size. If it lies wrong, turn it with **X**, **Y**, **Z** (90° each, red, green, blue as in Blender) or press **Upright** (longest side along the bike, thinnest across it); **Reset** goes back to the file's own orientation. The sizes update as you turn it, and the model opens the way the preview shows it. Everything (decals, stretch, the cut sheet) is measured from it, and a wrong unit also makes zooming feel wrong. You can change it later with *Model units* in the top bar. STL files are read Z-up, the way Blender and CAD programs export them.

**Scans: Auto-align.** A scan (EXStar Hub, Artec, Polycam …) is rarely straight, and its bounding box is not centred on the frame, so mirrored decals land a little off. Press **Auto-align**: FitFlat finds the frame's real centre plane by matching the two sides (small one-sided parts like the derailleur hanger, brake mount or cable ports are ignored), straightens the frame, puts the front to the right and the BB down, and levels it along the chainstays. Mirroring then uses that plane, not the middle of the box. Check the preview: if the front or the bottom is the wrong way round, turn it with **Z** (twice) or **X** (twice). The scan's triangles do not need to match left and right; mirrored decals are laid onto the surface on the other side.

**Make symmetric** (appears after Auto-align): keeps one half of the scan, the non-drive or the drive side, and mirrors it to the other side, so both sides are exactly the same. Mirrored decals and their cut pieces then match exactly, and scan noise cannot make the two pieces differ. Parts that exist on one side only are copied from the kept half or disappear, so keep the side that is closest to what the film has to cover.

The real frame model gives the most accurate production patterns.


### Preparing the model (export settings)
**Position:** the frame standing as it rides, front (head tube and fork) towards **+X**, drive side (chainring) towards **−Y**, centre plane of the frame at Y = 0. In Blender and Plasticity that is the bike seen from the side in the *Front* view. Facing another way still works; only the first view changes.

**Up axis:** FitFlat reads `.glb`/`.gltf` and `.obj` as **Y up** (the usual standard) and `.stl` as **Z up**. If the size shown at the top has height and width swapped, the model came in lying on its side: export again with the right up axis.

**Only the frame:** export the frame (and fork) as one object, without wheels, components or a floor. Leave out one-sided parts if you can (derailleur hanger, disc mount): they move the middle that **Plane: auto** mirrors around.

**Plasticity** — *File › Export*, *Wavefront OBJ (.obj)*:

| Option | Setting for FitFlat |
|---|---|
| Topology | **Tris** |
| Face Angle Tolerance | **0.15** (high poly) |
| Edge Angle Tolerance | **0.15** |
| Face Plane Tolerance | **0.005** (cm, = 0.05 mm) |
| Max Width | about **0.4** cm (4 mm, the size FitFlat works with) |
| Simplify Radial Surfaces | on (even rings around tubes) |
| Remove Small Features | off |
| Up Axis | **Y** |
| Scale | 1, then pick the unit in FitFlat's *Check the model size* window |

**EXStar Hub (Einstar scanners)** — scans come in whatever position the scan ended, so line the frame up first, then export STL:

1. **Clean up:** remove the stand, turntable, floor and floating bits; fill small holes in the tubes (a hole where a decal goes breaks that decal).
2. **Simplify** (*Mesh Editing › Simplification*, 0–99 % fewer triangles): aim for about 300,000–500,000 triangles. A scan of a few million triangles needs a high value (around 85–90); check that tube edges stay round.
3. **Align** (*Align*: type the *Rotation*/*Offset* and *Move to*, or *3-2-1 alignment* with a plane, line and point): frame standing as it rides, **Z up**, front towards **+X**, drive side towards **−Y**, centre plane at Y = 0. Turn on the global coordinate system to see the axes (red X, green Y, blue Z). You can also skip this step and press **Auto-align** when you open the scan in FitFlat; it finds the centre plane more precisely than lining it up by eye.
4. **Export** as **STL** (FitFlat reads STL with Z up), and pick **Millimetres** in FitFlat's *Check the model size*. OBJ works too, but FitFlat reads OBJ with Y up, so the frame would come in lying down.

**Blender** — *File › Export › glTF 2.0*, format *glTF Binary (.glb)*: *Include › Selected Objects*, *Transform › +Y Up* on (default), *Mesh › Apply Modifiers* on. Or *Wavefront (.obj)* with *Up: Y*, *Forward: −Z* (defaults). Apply rotation and scale first (Ctrl+A).

**CAD (SolidWorks, Fusion, Onshape, Rhino)** — export STL or OBJ with a fine surface deviation (chord tolerance about **0.05 mm**, angle about **10°**) and, if offered, a maximum edge length of about 4 mm.

**How many triangles:** 50,000–300,000, evenly spread, is ideal. Round tubes need at least **32 sides** around (64 is better); long thin triangles from CAD hurt accuracy more than a low count. FitFlat splits large triangles down to about 4 mm itself (up to 400,000). Up to about 500,000 triangles runs smoothly; above about 2 million the browser can run out of memory. Thin out 3D scans to about 300,000–500,000 first (Blender: *Decimate* or *Remesh*).

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
- **Precision:** hold **Alt** while scrolling, turning or sliding the view, and it moves at a fifth of the speed. (In Edit with a decal selected, Alt + scroll sizes the decal instead.)
- **View panel:** *Look from* Front, Back, Left, Right, Top, Bottom; *Turn* by 45°; and **Saved views** (turn the model to an angle you like and click *Save view*).
- **Ortho** switches to an orthographic view (no perspective) — good with the axis views for exact layouts.
- **Grid** shows a grid and can snap points to it (2.5D: the grid sets the position in the plane, the frame surface gives the depth). Set the step, the plane and *Snap* in the Grid part of the View panel.
- **Frame opacity** makes the frame see-through so you can see decals on the far side (Alt+Z toggles).
- **Fit** shows the whole frame.

Z is the vertical axis. X runs front to back along the bike, Y side to side.

### Reference image
In the View panel, **Reference image → Load…** puts a photo of the real frame over the view, with **Adjust** on: drag the photo to move it, scroll over it to size it (hold **Alt** for fine steps), turn it by the round handle above it or type an exact angle in the **°** box (arrow keys in the box: 0.5°, Shift: 5°), and nudge it with the arrow keys. **Fit** brings the whole photo back into view when it is bigger than the screen. Switch **Adjust** off to turn and zoom the model behind the photo again, and set its opacity with the slider. Then fix it in place:

- **Stick to model** projects the photo onto the frame from that view, so it stays on the tubes when you turn the model. Good for tracing paint lines, logos and cable ports.
- **Stick as plane** stands the photo in the scene as a flat board through the middle of the model, facing the view it was lined up in. Good for a side photo you want to compare against from other angles.

**Unstick** goes back to the view the photo was lined up in and turns Adjust on again; **Remove** clears it.

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

### Live unwrap
**Live unwrap** is off by default: edits only redraw the outline, the decal shows **not unwrapped**, and it stays off the sheet until you press **Unwrap** (key **U**) once the shape is done. Turn **Live unwrap** on (key **L**) to unwrap after every change, handy for small tweaks but slower on big frames. The first time you switch to Edit, a note explains this (tick *Don't show again* to hide it). Opening the Sheet tab, exporting, combining decals and relief cuts unwrap anything still waiting on their own. With a decal selected, **Unwrap** does only that one; the other changed decals wait until you press Unwrap with nothing selected (exporting unwraps them anyway). Many decals are unwrapped one after another with a progress note, so the browser does not think the page has stopped.

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
- Points near the pink centre plane snap to it and join their mirror there. **Snap** sets the distance in mm.
- **Seam snap** (key **Q**) turns that off: points stay exactly where you put them near the seam; they only stop at the plane instead of crossing it. A point already on the plane comes off when you drag it further than the snap distance (at least 3 mm).
- **Join** (in the decal's row) decides whether the two sides are one piece across the centre line or two separate mirrored pieces that only meet there.
- A shape that goes all the way around a tube is never closed into a ring: it joins along one stretch of the centre line and stays open along the other, so it always unwraps into one flat piece.
- Whenever a piece closes around a tube, FitFlat asks where the seam should go (underneath, on top, the far side or the near side) and marks it on the model as a dashed line. **Seam** in the decal's row changes it later.
- Where a mirrored decal runs along the centre line, each stretch it runs along is an **edge** with a small numbered tag on the model: a link means **joined** (both sides are one piece there), scissors mean **seam** (the film is cut open there, dashed line). Click a tag to switch it. On a decal that goes round the tube, at least one edge has to stay open (by default the one underneath); all the others can stay joined, and openings between them are cut out like holes. If you join the last open edge, FitFlat asks which edge should stay open instead (hover a row to see the edge light up). Cut every edge open and you get two separate pieces.
- A shape that sits on the tube with openings along the centre line (it doesn't go round the tube) is free: every edge starts joined and each opening is cut out like a Subtract hole. Make any edge a seam, one, several or none; a seam just opens the film there.
- The Knife cuts seams too: a cut along the centre line splits a joined decal into its two sides, and they stay apart until you press **Join**.
- A decal that starts and ends on the centre plane becomes **one symmetric decal** across the middle — you edit one half, the other follows.
- A shape or pen outline that crosses the centre plane is cut there and becomes a symmetric decal (no overlapping copies).
- **Apply** (in the decal list) turns the mirrored part into a real outline you can edit separately.

---

## 8. Knife

Choose **Knife** and click points in the view — on or off the model.

- A line **across a decal** splits it. Draw past the edges.
- Click the **first point again** to close a loop: *Apply cut* cuts that area out of the decals it overlaps, or leaves a hole if it lies inside one.
- **Cut through** (on by default, key **T**) cuts every surface under the line, front and back. Off: only the visible side. It is only available with **Mirror** off: with Mirror on, the knife cuts the side you see and the cut is mirrored to the other side.
- In mirror mode cuts are mirrored to the other side; a cut that starts or ends at the centre line continues across it.
- **Apply cut** (Enter) applies it, **Clear** (Esc) removes the line, Backspace removes the last knife point.
- Locked decals are not cut.

---

## 9. Combining decals

Select a decal, then **Shift-click** more decals (on the model or in the list). The extra ones show in blue, and the **Options** panel shows the first name and how many others, with the buttons below.

- **Union** joins all of them into one shape.
- **Subtract** cuts all the blue shapes out of the first one (**Swap** switches which one is cut).
- **Intersect** keeps only the area all of them share.

After each combination FitFlat asks:

- **Keep editable**: the originals stay inside the result. Select the combined piece and its parts appear under it in the list (and as thin lines on the model); change one and the result follows. **Apply** on the row fixes it, **Separate** gives you the originals back. Editing the combined piece's own points also fixes it.
- **Apply**: the result becomes one ordinary outline straight away.

Tick **Don't ask again** to keep your choice. New points are added only where the outlines cross. Shapes with holes (like a donut) are kept as a decal with a hole. In mirror mode the drawn halves are combined and the result stays mirrored, so both sides match.

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

- a purple **folds** badge — the flat piece is bigger than the frame somewhere: the film has too much material there and may fold or wrinkle.

**Stretch** in the view bar colours each decal on the model, and each piece on the sheet, in two scales: green → yellow → red where the film has to **stretch**, green → light blue → dark blue where it has too much material and may **fold**. Folds count from half the stretch limit, because film handles them worse. Folds belong to bulges: a V-notch or **Pull film tight** takes them out.

Row buttons: **Mirror**, **Apply** (mirror), **Invert** (the film covers the area outside the outline instead of inside, e.g. around a tube end), **Detach** (make a hole a separate piece), **Duplicate**, **🔒 Lock**, **Delete**.

**Duplicate** (or **Ctrl+D**) copies the decal with its holes and mirror setting and puts the copy right next to it on the surface, on the same side of the mirror. The copy is selected, so you can drag it into place with the gizmo straight away. Duplicating again lines up further copies.

**Suggested cuts** appear when a decal has too much film somewhere. FitFlat finds those spots on the unwrapped (flat) decal and plans each cut there, as a straight cut in from the edge at a right angle, like on a pre-cut kit sheet. They show as red dashed lines on the sheet (and on the model while the Knife is on):
- **V-notch** (red tag, e.g. *V 9°*) where the film is too big and would wrinkle, typically on bulges and tube ends. The film gets a cut from the edge that opens into a clean V on the cut sheet and closes up again on the frame, so nothing is left uncovered.
- **Saddles get no suggestion.** Where the frame is saddle-shaped, like the fillet where two tubes meet, it needs more film than a flat sheet has: a V would only take film away and a slit would leave a gap. There the edge comes out a little short and is stretched into place (red). If that's more than your film can take, split the decal there yourself with the Knife.

Each V-notch tag shows the V's opening in degrees and how wide it is at the edge in mm, and the V is drawn on the model. Click a suggestion on the sheet to make that cut. **Every cut closes on the frame:** both sides of the V meet again when the film goes on, so nothing is left uncovered. On the sheet it opens as a V, and the width of that V is how much film comes out. FitFlat picks the width for each new cut by trying several and keeping the one that leaves the least stretch and excess around it, measured against the film's limits. Change it yourself on the sheet: drag the yellow dot at the V's corner to open or close it (the label shows the V's base, the film that comes out at the edge, in mm; fully closed is a plain slit). The colours show the result right away: too narrow leaves red (stretch), too wide takes out too much and turns blue (excess). To place a V-notch yourself, take the **Knife** and draw a line that starts just outside the decal and stops inside it, then press Apply cut (Enter), or cut on the sheet (see Sheet). On a mirrored decal the cuts come in mirror-image pairs with the same width: they're planned on your side and copied to the other. Every cut ends in a small round hole (part of the same cut line) so the film doesn't tear on, and a suggested cut is only kept if it really lowers the stretch around its spot; the message tells you how much it changed and which suggestions were left out. **Editing cuts:** select the decal in Edit mode and every cut gets handles: drag the **square** to move where it starts on the edge, drag the **round** end to change its length and direction (the cut stays straight on the sheet; its width is picked again), and **×** deletes it. On a mirrored decal the mirror image follows. Every change can be undone (Ctrl+Z); **Remove cuts** in the list takes all of them out.

**Lock** makes a decal unselectable and uneditable on the model, so you can draw over it. The Knife leaves locked decals alone.

### History
**History** in the sidebar lists every step with its name and time. Click a step to go back to it, or forward again; Ctrl+Z / Ctrl+Shift+Z still work as usual.

---

## 12. Sheet and export

- **Width, Height, Gap** of the sheet in mm. The preview shows how the pieces are packed and how many there are.
- **Stretch map in the export:** tick **Stretch map** in the Sheet settings and the SVG gets an extra layer under the cut lines: every piece in its stretch and excess colours, the suggested V-notches as red dashed lines and a legend under the sheet with the film and its limits. Open it in Illustrator, Inkscape or Affinity to plan cuts by hand. Hide or delete that layer before sending the file to the cutter.
- **Suggested cuts are shown on the flat sheet** (for the selected decal, or all decals with Stretch on), and as dashed lines on the model while the **Knife** is on, so you can draw along them. Click one on the sheet to make it.
- **Suggested V-notches:** where a piece has too much film, red dashed lines on the sheet show suggested V-notches. Click one to cut it: FitFlat makes the cut on the frame, unwraps again and shows the result on the sheet and on the model, where you can adjust it with its handles in Edit mode. Ctrl+Z undoes it.
- **Notch tool (V):** the **V** button above the sheet preview turns on the notch tool. It has two modes at the top of its panel. **Add notch** (crosshair cursor, key **A** switches): click a piece near its edge to cut a V-notch with a rounded tip there; a yellow preview shows where it goes. After one notch the tool goes back to **Select**, so a stray click doesn't cut another; Shift-click to keep adding. A click right beside an existing notch picks that notch instead of cutting a second one. In **Select**, only a click on a notch does something to notches; a click on a piece selects its decal (so you can turn it), and dragging elsewhere moves the sheet. Set **Width** (at the edge), **Length** (into the piece) and **Tip r** (radius of the round tip, so the film does not tear) below the preview, or pick a template (Small V, Medium V, Long V, Wide V, Slit). **Save as template** keeps your own numbers in this browser. In Select, click a notch to select it, then drag it along the edge or slide it with the arrow keys (1 mm, Shift: 5 mm), change its numbers, or press Delete. **Enlarge** shows the pieces big to work on them. **Count in stretch** (on by default) makes the unwrap treat the notch as a slit along its centre line: the film may open or close there as the frame needs, so the stretch colours and numbers include the notch, and a note shows the stretch before and after. The V is then cut out around that slit. Turn it off for a selected notch (or for new ones, with none selected) to cut the notch out of the finished flat piece only. Either way the notch is cut on the sheet and in the SVG/DXF export; it is anchored on the frame, so it stays in place when the decal is unwrapped again, and a mirrored decal's other piece gets the same notch. If a notch reaches through the piece, FitFlat warns you: only the bigger part would be kept.
- **V width:** each cut opens as a V on the sheet and closes on the frame; with the decal selected its corner has a yellow dot: drag it to make the V wider or narrower, down to a plain slit.
- **Zoom:** scroll over the preview to zoom in where the pointer is, drag to move around, double-click (or **Fit**) to see the whole sheet again. **⤢** opens a big view over the screen; Esc closes it.
- **Name labels**, **Sheet outline**, **Mirror pieces** (for cutting from the back).
- **Clean curves** exports smooth Bézier curves with few nodes. **±** sets how far exported curves may stray from the unwrapped outline (default 0.1 mm); higher gives fewer, smoother nodes.
- **Roll** — cut from a roll: the sheet gets as long as the pieces need; Height is ignored.
- **Registration marks** — three print-and-cut marks in the corners; pieces keep clear of them.
- **Weeding boxes** — a cut box around each piece and the sheet, so the waste film comes off in strips.
- **Download SVG** or **DXF**. Cut lines are on a `cut` layer in millimetres; labels, the sheet outline, registration marks and weeding boxes are on their own layers so you can hide or use them in the cutter software.

The preview shows the sheet size, the number of pieces, how much of the film is used and the area. With **Stretch** on, the flat pieces are coloured by stretch too.

If a piece is larger than the sheet, increase the sheet or split the decal.

### Pieces on the sheet
FitFlat lays the pieces out by itself: each is turned so the box around it is as small as possible (long side across), then they are packed in rows. Several orders and lying/standing turns are tried, and the layout that needs the least film wins. To turn a piece yourself, select its decal (click it on the sheet or in the list): under the preview, **↔** lays it flat (long side across) and **↕** stands it up, and it stays that way when the sheet is packed; **⟲ 90°** / **⟳ 90°** turn it, the **°** box takes any angle (arrow keys: 1°, Shift: 15°), and **Auto** gives the turn back to FitFlat (which may then stand it up if that packs better). A mirrored decal's other piece turns the opposite way, so both stay mirror images. The turn is saved with the project and can be undone.

### Film
Pick your film in **Film** (PPF gloss or matte, cast or calendered vinyl, or Custom) and set its **Max stretch**. The stretch colours, the badges in the list and the relief-cut suggestions all use this limit. The presets are starting points; check your film's data sheet.

The **outline is never longer than on the frame.** Film that is too long at the edge would wrinkle, so where the frame bulges the edge keeps its true length and the extra film shows up as excess (blue), the place for a V-notch: its base is the film that comes out. Where the frame is saddle-shaped, the edge may come out a little shorter than the frame, within the film's stretch limit, and the installer stretches it to the line (red at the edge instead of false blue inside). With **Pull film tight** off, the outline keeps exactly its true length everywhere.

**Pull film tight** (on by default) unwraps the way an installer applies film: where the frame curves, the cut piece may come out a little smaller than the surface (up to 60% of Max stretch), never bigger. The curve then goes into tension, which the film handles, instead of extra film that wrinkles. Straight tubes stay true to size. Turn it off for exact sizes everywhere.

### Sizes (grading)
For frames built from a geometry preset or chart with several sizes, **Sizes** lists them. Draw the decals once on one size; they are moved onto the other sizes along each tube — **keeping the gap to the nearer tube end** (decals stay put at the joints) or **scaling with the tube length**. **Show size** loads another size with the decals moved onto it. **Download all sizes** unwraps the decals on every ticked size and saves one SVG with a labelled block per size, or **one file per size**.

---

## 13. Saving projects

Your work is kept **in this browser** (on this computer). The project name in the top bar shows a dot while there are unsaved changes; click it to open **Projects**.

- **Save** (Ctrl+S) saves the project under Projects; the first time it asks for a name. **Save current as new** in Projects keeps a separate copy.
- **Projects** lists your saved projects with a picture, the frame and the number of decals. Search and sort them; **Open**, **Rename**, **Duplicate**, **Download** (a `.json` file) or **Delete**.
- **Autosave**: a copy is saved as *Last session* about two seconds after every change, when you switch away from the tab or close it, and every half minute. After a reload or a crash FitFlat offers it straight away: **Restore** brings it back (it also stays in Projects). Reloading or closing the tab with unsaved changes makes the browser ask first (*Leave site?*), and right-clicking in FitFlat no longer opens the browser menu with its *Reload*.
- **Starting points** are a frame with the decals you always use on it (for example one bike model). **Save current as starting point**, then **New from it** opens a copy as a new project; the starting point itself never changes.
- **Decal templates** are single decals saved with *Save to library* in the Decal panel. **Place** one on any frame like SVG artwork: move over the model, click, adjust, Apply. **Download** saves one template as an SVG file in mm, **Download all** saves them all in one file, and **Add from files…** loads SVG files (each with closed outlines, in mm) or such a file.
- **Templates folder…** (in the Decal templates tab) loads and keeps templates in a folder of their own, for example a shared folder on the company network, separate from where your projects are. Every template there is one SVG file, and any SVG you copy into that folder shows up as a template. **Stop using this folder** goes back to keeping templates with your projects.
- **Open** in the top bar still opens files: models (.glb, .obj, .stl), projects (.json) and SVG artwork.

Browser storage belongs to this browser on this computer. To move work to another computer, or as a backup, use **Download** and open the file there.

### Keeping projects in a folder

By default everything stays in the browser. In **Projects**, **Use a folder…** keeps projects, starting points and decal templates as files in a folder you choose instead: on your disk, on a USB stick or on a company network drive.

- Each project is one `.fitflat.json` file named after the project; it also opens with **Open**. Starting points go into a *Starting points* subfolder, the last session into *Autosave*, decal templates into *FitFlat templates.json*.
- Rename, duplicate and delete in Projects change the files in the folder.
- **Copy browser projects here** copies what you saved in the browser into the folder. **Use this browser** switches back; the folder stays as it is.
- The browser asks once for permission to use the folder. After a restart it may ask again: open Projects and click **Reconnect**.
- Folders work in Chrome and Edge. Firefox and Safari keep projects in the browser; use Download and Open there.

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
| D / V / K | Draw / Edit / Knife |
| Ctrl+Z / Ctrl+Shift+Z (Ctrl+Y) | Undo / redo |
| Enter | Close shape · apply knife cut · apply placement |
| Esc | Stop drawing · clear knife · cancel |
| Backspace / Delete | Delete selected points · with no points selected, the selected decal · remove last knife or outline point |
| Ctrl+A | Select all points of the decal |
| Ctrl+D | Duplicate the selected decal |
| M | Merge selected points |
| F | Zoom to selection |
| L | Live unwrap on / off |
| U or Shift+Space | Unwrap changed decals (when Live unwrap is off) |
| Arrow keys (Shift) | Nudge selected points |
| X / Y / Z (while dragging) | Lock the move to an axis |
| Ctrl + scroll / Alt + scroll | Turn / size the decal or selection (Shift: bigger steps) |
| Alt + scroll / drag (nothing selected in Edit) | Precision: zoom, turn and slide the view at a fifth of the speed |
| T | Knife: cut through on/off |
| Q | Mirror: seam snap on/off |
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
