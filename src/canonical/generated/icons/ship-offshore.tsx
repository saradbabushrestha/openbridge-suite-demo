import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsShipOffshore(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ship-offshore" {...props} />;
}

export default ObIconsShipOffshore;
