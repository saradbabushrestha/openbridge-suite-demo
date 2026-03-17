# OpenBridge Semantic Suite v1

This package keeps the extracted shell and instrument asset packages intact and adds a new semantic React layer on top.

## Included

- `shell/` — extracted shell SVG assets, CSS, generated TSX wrappers, manifests
- `instrument/` — extracted instrument SVG assets, CSS, generated TSX wrappers, manifests
- `src/semantic/` — new semantic React components and demos
- `docs/semantic-manifest.json` — summary of the semantic layer
- `docs/GAP_CLOSURE.md` — what was closed and what remains out of scope

## Main semantic components

- Shell: `NotificationButton`, `AdviceButton`, `NavigationRail`, `AppMenu`, `SystemMenu`, `UserMenu`, `CommandMenu`, `TopBarShell`
- Instrument: `CompassWidget`, `HeadingWidget`, `SpeedWidget`, `WindWidget`, `RudderWidget`, `ThrusterWidget`, `MainEngineWidget`, `ReadoutWidget`, `MotionWidget`
- Demos: `BridgeShellDemo`, `BridgeInstrumentDemo`, `BridgeConsoleDemo`

## How to use

Import the semantic layer from `src/semantic/index.ts`, or use the raw extracted packages directly from `shell/src` and `instrument/src`.

The semantic components are designed to be immediately useful:
- they map high-level props to exact extracted OpenBridge asset variants
- they allow dynamic values/units/titles at the React layer
- they remain responsive via the shared SVG runtime


## v3 canonical layer

This build adds:
- a combined root runtime registry across shell and instrument
- canonical dedupe manifests and alias mappings
- `OpenBridgeCanonicalAsset` for rendering by canonical or legacy key
- a domain/layer ownership model (`primitives`, `partials`, `finals`)

Main manifests:
- `canonical/manifests/canonical-assets.json`
- `canonical/manifests/asset-map.json`
- `canonical/manifests/alias-map.json`
- `canonical/manifests/dedupe-report.json`


## v4 additions

- integrated icons into the canonical suite
- generated one TSX wrapper per canonical asset
- expanded semantic coverage with depth, turn-rate, current, object, alert, calendar, brilliance, launcher, and icon-badge components
- extended the runtime registry to include icons
# openbridge-suite-demo
