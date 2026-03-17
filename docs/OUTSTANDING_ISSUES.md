# Outstanding Issues

- Semantic components now cover shell, navigation, motion, propulsion, environment, readout, and objects, but stateful business logic is still hand-authored rather than fully generated from Figma semantics.
- The icon family is integrated and individually importable, but icon theming beyond inherited CSS color/currentColor is still up to the consuming app.
- Legacy shell/instrument trees remain in the package for compatibility; the new canonical wrapper layer should be preferred for new work.
- Some source asset names include legacy spelling inconsistencies from the export files (for example `enhaced` and `Enviroment`), kept where needed for source fidelity.
