import * as React from "react";
import { OpenBridgeAsset, openBridgeRegistry, type OpenBridgeRegistryKey, type OpenBridgeAssetProps } from "./openbridgeRegistry";
import { openBridgeCanonicalRegistry, openBridgeLegacyToCanonical, type OpenBridgeCanonicalKey, type OpenBridgeLegacyKey } from "./canonical.generated";

export type { OpenBridgeCanonicalKey, OpenBridgeLegacyKey } from "./canonical.generated";

export function resolveCanonicalAssetKey(asset: OpenBridgeCanonicalKey | OpenBridgeLegacyKey | OpenBridgeRegistryKey): OpenBridgeCanonicalKey | null {
  if (asset in openBridgeCanonicalRegistry) return asset as OpenBridgeCanonicalKey;
  if (asset in openBridgeLegacyToCanonical) return openBridgeLegacyToCanonical[asset as OpenBridgeLegacyKey] as OpenBridgeCanonicalKey;
  return null;
}

export function resolveLegacyAssetKey(asset: OpenBridgeCanonicalKey | OpenBridgeLegacyKey | OpenBridgeRegistryKey): OpenBridgeRegistryKey | null {
  const canonical = resolveCanonicalAssetKey(asset);
  if (!canonical) return (asset in openBridgeRegistry ? asset : null) as OpenBridgeRegistryKey | null;
  return openBridgeCanonicalRegistry[canonical].legacyKey as OpenBridgeRegistryKey;
}

export function listCanonicalAssets() {
  return Object.keys(openBridgeCanonicalRegistry) as OpenBridgeCanonicalKey[];
}

export function listCanonicalAssetsByDomain(domain?: string, layer?: string) {
  return listCanonicalAssets().filter((key) => {
    const meta = openBridgeCanonicalRegistry[key];
    if (domain && meta.domain !== domain) return false;
    if (layer && meta.layer !== layer) return false;
    return true;
  });
}

export function getCanonicalAssetMeta(asset: OpenBridgeCanonicalKey | OpenBridgeLegacyKey | OpenBridgeRegistryKey) {
  const canonical = resolveCanonicalAssetKey(asset);
  return canonical ? openBridgeCanonicalRegistry[canonical] : null;
}

export function OpenBridgeCanonicalAsset({ asset, ...props }: { asset: OpenBridgeCanonicalKey | OpenBridgeLegacyKey | OpenBridgeRegistryKey } & OpenBridgeAssetProps) {
  const legacy = resolveLegacyAssetKey(asset);
  if (!legacy) return null;
  return <OpenBridgeAsset asset={legacy} {...props} />;
}
