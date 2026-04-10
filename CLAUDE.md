# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (see `.npmrc` for CRA hoist settings).

- `pnpm dev` / `pnpm start` — run Create React App dev server on **port 4000** (not the CRA default 3000).
- `pnpm build` — production build.
- `pnpm test` — CRA/Jest watch mode. Run a single test with `pnpm test -- --watchAll=false path/to/file.test.tsx` or filter inside watch mode with `p` (filename) / `t` (test name).

There is no separate lint command — ESLint runs through `react-scripts` (config: `react-app` + `react-app/jest`).

## Architecture

A React + Three.js sandbox built on `@react-three/fiber`. The composition is intentionally shallow: `App → LayoutCanvas → <Scene>`, where `<Scene>` is swapped in `src/App.tsx` to switch demos.

### Layers

- **`components/canvas/layout-canvas.tsx`** — the single `<Canvas>` wrapper. It owns camera, `OrbitControls`, `ambientLight`, helpers (`gridHelper`/`axesHelper`), and wraps children in `<Suspense>` + `<Physics>` (Rapier, gravity `[0, -9.8, 0]`). Any scene mounted under it inherits physics automatically — do not add another `<Physics>` provider inside a scene.
- **`components/scene/*`** — top-level demos (`dice-scene`, `bulb-scene`). A scene is the unit App.tsx mounts; it composes shapes + lights but does not set up its own canvas.
- **`components/shape/*`** — shape components that include their own `<RigidBody>` wrapper. `Dice` uses `forwardRef<RapierRigidBody>` so callers can obtain the physics handle via ref. `Floor` is self-contained with a fixed RigidBody.
- **`hooks/useDice.tsx`** — returns `{ ref, throwDice }`. The ref is passed to `<Dice ref={ref} />` and `throwDice` applies impulse/rotation via the Rapier API. When adding new interactive physics objects, follow this pattern: shape component owns the `<RigidBody>`, hook owns the imperative logic.

### Physics engine caveat

Two physics libraries are installed: **`@react-three/rapier`** (active) and **`@react-three/cannon`** (only used by legacy dead files: `shape/wood-floor.tsx`, `shape/wall.tsx`, `shape/plane.tsx`). Cannon's hooks will not work under the Rapier `<Physics>` provider in `LayoutCanvas`. Prefer Rapier for new code.

### Assets

GLB models live in `public/` (`dice.glb`, `donut.glb`) and are loaded by path via `@react-three/drei`'s `<Gltf src="/dice.glb" />`. Source Blender files are in `blender/`. Textures under `public/texture/` are loaded with `useLoader(THREE.TextureLoader, ...)`.

## Conventions

- **Prettier** (`.prettierrc.json`): single quotes, semicolons, 2-space indent, `printWidth: 120`, `@trivago/prettier-plugin-sort-imports` with separated import groups. Keep third-party imports in their own block above relative imports.
- **Styling**: Tailwind is configured (`tailwind.config.js`) and used for DOM layout only (e.g. `w-screen h-screen` on the canvas wrapper). 3D styling happens through Three.js materials, not Tailwind.
- **TypeScript**: `strict: true`, `target: es5`, `jsx: react-jsx`. No path aliases configured — use relative imports.
