import * as React from "react";
import type { OpenBridgeAssetProps as ShellAssetProps } from "../../shell/src/runtime/renderOpenBridgeSvg";
import { openBridgeAssetRegistry as shellRegistry } from "../../shell/src/registry";
import { openBridgeAssetRegistry as instrumentRegistry } from "../../instrument/src/registry";
import { openBridgeIconRegistry as iconRegistry } from "../../icons/src/registry";

export type OpenBridgeAssetProps = ShellAssetProps;

export const openBridgeRegistry = {
  ...Object.fromEntries(Object.entries(shellRegistry).map(([key, value]) => [`shell:${key}`, value])),
  ...Object.fromEntries(Object.entries(instrumentRegistry).map(([key, value]) => [`instrument:${key}`, value])),
  ...Object.fromEntries(Object.entries(iconRegistry).map(([key, value]) => [`icons:${key.replace(/^icons\//, '')}`, value])),
} as const;

export type OpenBridgeRegistryKey = keyof typeof openBridgeRegistry;

export function OpenBridgeAsset({ asset, ...props }: { asset: OpenBridgeRegistryKey } & OpenBridgeAssetProps) {
  const entry = openBridgeRegistry[asset];
  if (!entry) {
    return null;
  }
  const Component: any = entry.component;
  return <Component {...props} />;
}

export function listOpenBridgeAssets() {
  return Object.keys(openBridgeRegistry) as OpenBridgeRegistryKey[];
}
