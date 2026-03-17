import { jsx as _jsx } from "react/jsx-runtime";
import { openBridgeAssetRegistry as shellRegistry } from "../../shell/src/registry";
import { openBridgeAssetRegistry as instrumentRegistry } from "../../instrument/src/registry";
import { openBridgeIconRegistry as iconRegistry } from "../../icons/src/registry";
export const openBridgeRegistry = {
    ...Object.fromEntries(Object.entries(shellRegistry).map(([key, value]) => [`shell:${key}`, value])),
    ...Object.fromEntries(Object.entries(instrumentRegistry).map(([key, value]) => [`instrument:${key}`, value])),
    ...Object.fromEntries(Object.entries(iconRegistry).map(([key, value]) => [`icons:${key.replace(/^icons\//, '')}`, value])),
};
export function OpenBridgeAsset({ asset, ...props }) {
    const entry = openBridgeRegistry[asset];
    if (!entry) {
        return null;
    }
    const Component = entry.component;
    return _jsx(Component, { ...props });
}
export function listOpenBridgeAssets() {
    return Object.keys(openBridgeRegistry);
}
