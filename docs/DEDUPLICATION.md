# Deduplication and canonical layout

Summary:
- Total legacy assets: 1088
- Unique canonical assets: 971
- Exact duplicate legacy assets collapsed via aliases: 117

Canonical path format:
- `{domain}/{layer}/{area?}/{source-relative-tail}`

Layers:
- `primitives`: building blocks and generic gauge primitives
- `partials`: indicator-style partial assets
- `finals`: final composite/final families

Domains in this build:
- environment, motion, navigation, objects, primitives, propulsion, readout, shell

Compatibility:
- existing shell/instrument registry keys still work
- legacy keys map to canonical keys via `openBridgeLegacyToCanonical`
- canonical keys render through `OpenBridgeCanonicalAsset`
