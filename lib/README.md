# Libraries

FitFlat serves its own copies of these libraries, so loading the page contacts no one but the site itself.
They are byte-identical to the published npm packages (checked against the packages' SHA-384 hashes when they were copied here). They are served from the same site as the page, so they need no integrity attribute, and the page also works when opened straight from disk.

| Library | Version | Licence |
|---|---|---|
| [three.js](https://github.com/mrdoob/three.js) (`three.min.js`, OrbitControls, GLTF/OBJ/STL/SVG loaders, Line2) | r147 (npm `three@0.147.0`) | MIT, see `three/LICENSE` |
| [polygon-clipping](https://github.com/mfogel/polygon-clipping) (bundles splaytree, MIT, and robust-predicates, Unlicense) | 0.15.7 | MIT, see `polygon-clipping/LICENSE.md` |
