# Decal Studio

A browser tool for making bicycle frame protection film decals. Load a frame model (or build one from geometry), draw the decals right on the 3D tubes, and Decal Studio unwraps them flat without distortion, packs them on a sheet and exports a clean SVG for the plotter/cutter.

It is one self-contained `index.html` — no build step, no install. Open it in a browser, or serve the repo with GitHub Pages.

## Workflow

1. **Frame** – load a GLB / GLTF / OBJ / STL, or generate a frame from geometry (Road, Gravel, MTB, carbon/aero presets, or paste a geometry chart).
2. **Draw** – Pen (straight lines by default, Bézier handles), Rectangle, Circle, or Polygon with a set number of sides and corner radius. Shapes are projected from the current view onto the visible surface.
3. **Edit** – move, add (Ctrl+click), delete (Alt+click), merge or split points, auto-smooth, round corners, boolean union / subtract / intersect, Knife cuts.
4. **Mirror** – on by default: decals are mirrored across the frame's centre plane, with clipping and an adjustable snap distance. Knife cuts and booleans apply to both sides. Mirroring can be applied to make independent copies.
5. **Import SVG** – project vector artwork onto the frame with a live placement preview (Alt+scroll = size, Ctrl+scroll = rotate, 1° snapping). Holes such as donut shapes are kept.
6. **Unwrap & export** – each decal is flattened (LSCM + ARAP), checked for stretch, packed, and exported as a simplified Bézier SVG in mm.

Projects save and load as `.json` (frame + decals + views).

## Views

X / Y / Z axis views, perspective / orthographic, 45° turns, saved views, grid with 2.5D snapping, and adjustable frame opacity (Alt+Z).

## Tech

[three.js](https://threejs.org) r147 and [polygon-clipping](https://github.com/mfogel/polygon-clipping) 0.15.7, loaded from jsDelivr.
