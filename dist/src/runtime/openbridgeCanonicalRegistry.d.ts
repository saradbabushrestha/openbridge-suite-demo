import { type OpenBridgeRegistryKey, type OpenBridgeAssetProps } from "./openbridgeRegistry";
import { type OpenBridgeCanonicalKey, type OpenBridgeLegacyKey } from "./canonical.generated";
export type { OpenBridgeCanonicalKey, OpenBridgeLegacyKey } from "./canonical.generated";
export declare function resolveCanonicalAssetKey(asset: OpenBridgeCanonicalKey | OpenBridgeLegacyKey | OpenBridgeRegistryKey): OpenBridgeCanonicalKey | null;
export declare function resolveLegacyAssetKey(asset: OpenBridgeCanonicalKey | OpenBridgeLegacyKey | OpenBridgeRegistryKey): OpenBridgeRegistryKey | null;
export declare function listCanonicalAssets(): OpenBridgeCanonicalKey[];
export declare function listCanonicalAssetsByDomain(domain?: string, layer?: string): string[];
export declare function getCanonicalAssetMeta(asset: OpenBridgeCanonicalKey | OpenBridgeLegacyKey | OpenBridgeRegistryKey): import("./canonical.generated").OpenBridgeCanonicalEntry;
export declare function OpenBridgeCanonicalAsset({ asset, ...props }: {
    asset: OpenBridgeCanonicalKey | OpenBridgeLegacyKey | OpenBridgeRegistryKey;
} & OpenBridgeAssetProps): any;
