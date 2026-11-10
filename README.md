# FitFlat

**Fits the frame. Comes out flat.** · *Passt auf den Rahmen. Kommt flach raus.*

A browser tool for making bicycle frame protection film decals. Load a frame model (or build one from geometry), draw the decals right on the 3D tubes, and FitFlat unwraps them flat without distortion, packs them on a sheet and exports a clean SVG for the plotter/cutter.

**Manual:** [English](MANUAL.md) · [Deutsch](MANUAL.de.md)

It is one self-contained `index.html` — no build step, no install. Open it in a browser, or serve the repo with GitHub Pages.

## Workflow

1. **Frame** – load a GLB / GLTF / OBJ / STL (STL is read as Z-up, like Blender and CAD exports), or generate a frame from geometry (Road, Gravel, MTB, carbon/aero presets, or paste a geometry chart).
2. **Draw** – Pen (straight lines by default, Bézier handles), Rectangle, Circle, or Polygon with a set number of sides and corner radius. Shapes are projected from the current view onto the visible surface.
3. **Edit** – move, add (Ctrl+click), delete (Alt+click), merge or split points, auto-smooth, round corners, boolean union / subtract / intersect, Knife cuts. The Knife cuts through the whole model by default (front and back of every tube under the line); switch **Cut through** off (or press T) to cut only the visible side. Closed knife loops cut an area out, or leave a hole. **Simplify** removes points the shape does not need, within a tolerance you set. Pen outlines can start off the model; they are projected onto the visible surface and follow the tube's edge.
4. **Mirror** – on by default: decals are mirrored across the frame's centre plane, with clipping and an adjustable snap distance. Knife cuts and booleans apply to both sides. Mirroring can be applied to make independent copies.
5. **Import SVG** – project vector artwork onto the frame with a live placement preview (Alt+scroll = size, Ctrl+scroll = rotate, 1° snapping). Holes such as donut shapes are kept.
6. **Unwrap & export** – each decal is flattened (LSCM + ARAP), checked for stretch, packed, and exported as clean Bézier curves in mm: one curve per decal segment where possible, straight segments as lines, smooth points without kinks, and the mesh's small wobble evened out within the export tolerance (default ±0.1 mm).

Projects save and load as `.json` (frame + decals + views).

## Projects, templates and sizes

Projects are saved in the browser (with autosave), with search, duplicate and download. **Starting points** keep a frame with its usual decals for new projects; **decal templates** place a saved decal on any frame. Frames built from a geometry chart with several sizes can be **graded**: draw once, export cut sheets for every size.

## Film and cutting

Film presets set the stretch limit used for warnings and relief cuts. The cut sheet can be a fixed sheet or a roll, with registration marks for print-and-cut, weeding boxes, and export as SVG or DXF.

## Views

Z is the vertical axis. Named views: Front, Back, Left, Right, Top, Bottom (keys 1, 3, 7, Ctrl for the opposite side), perspective / orthographic, 45° turns, saved views, grid with 2.5D snapping, and adjustable frame opacity (Alt+Z).

## Moving, turning and sizing decals

In Edit mode the selected decal shows a gizmo: drag the centre handle to move it, the knob or ring to turn it, a corner square to size it (Shift for 15° / 5% steps). Ctrl + scroll turns and Alt + scroll sizes too. Decals follow the surface, so they keep their true size on a tube. While dragging, a label shows the distance moved, the angle, the size and the segment lengths. **Duplicate** (or Ctrl+D) puts a copy right next to a decal. Lock a decal in the list to draw over it without picking it. The **Decal** panel takes typed values: move by X/Y/Z, gap to the tube ends, turn, size, grow or shrink the outline, and snapping to neighbouring decals at a set gap. A reference photo can be projected onto the frame to trace from.

## Panels

The tools, tool options, View panel and point tools float: drag one by its grip, drop it near an edge to pin it there, or use its pin button. Every panel can be turned between a row and a column and collapsed to its name. Everything about the view (look from, turn, ortho, grid, opacity, saved views) sits in the one View panel. **Reset panels** (in the View panel) puts everything back.

## Language

English and German (Deutsch). Switch with **EN | DE** in the top bar; the choice is remembered, and German browsers start in German.

## Tech

[three.js](https://threejs.org) r147 and [polygon-clipping](https://github.com/mfogel/polygon-clipping) 0.15.7, loaded from jsDelivr.

## License

Copyright 2026 Max Soldatkin. Released under the [PolyForm Noncommercial License 1.0.0](LICENSE.md).

- **Personal and other noncommercial use is free.**
- **Any commercial use needs my written permission.** That includes using FitFlat in a business to make decals for customers, selling it, or building it into another product. Get in touch through GitHub ([@helloiammaxim](https://github.com/helloiammaxim)) to arrange a commercial license.
