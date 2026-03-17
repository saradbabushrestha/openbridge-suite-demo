import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSimulation(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/simulation" {...props} />;
}

export default ObIconsSimulation;
