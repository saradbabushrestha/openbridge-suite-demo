import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsShipTanker(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ship-tanker" {...props} />;
}

export default ObIconsShipTanker;
