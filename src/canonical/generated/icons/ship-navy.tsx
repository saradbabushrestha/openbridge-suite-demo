import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsShipNavy(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ship-navy" {...props} />;
}

export default ObIconsShipNavy;
