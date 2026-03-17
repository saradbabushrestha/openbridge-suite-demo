import { jsx as _jsx } from "react/jsx-runtime";
import { OpenBridgeAsset, openBridgeRegistry } from "./openbridgeRegistry";
import { openBridgeCanonicalRegistry, openBridgeLegacyToCanonical } from "./canonical.generated";
export function resolveCanonicalAssetKey(asset) {
    if (asset in openBridgeCanonicalRegistry)
        return asset;
    if (asset in openBridgeLegacyToCanonical)
        return openBridgeLegacyToCanonical[asset];
    return null;
}
export function resolveLegacyAssetKey(asset) {
    const canonical = resolveCanonicalAssetKey(asset);
    if (!canonical)
        return (asset in openBridgeRegistry ? asset : null);
    return openBridgeCanonicalRegistry[canonical].legacyKey;
}
export function listCanonicalAssets() {
    return Object.keys(openBridgeCanonicalRegistry);
}
export function listCanonicalAssetsByDomain(domain, layer) {
    return listCanonicalAssets().filter((key) => {
        const meta = openBridgeCanonicalRegistry[key];
        if (domain && meta.domain !== domain)
            return false;
        if (layer && meta.layer !== layer)
            return false;
        return true;
    });
}
export function getCanonicalAssetMeta(asset) {
    const canonical = resolveCanonicalAssetKey(asset);
    return canonical ? openBridgeCanonicalRegistry[canonical] : null;
}
export function OpenBridgeCanonicalAsset({ asset, ...props }) {
    const legacy = resolveLegacyAssetKey(asset);
    if (!legacy)
        return null;
    return _jsx(OpenBridgeAsset, { asset: legacy, ...props });
}
