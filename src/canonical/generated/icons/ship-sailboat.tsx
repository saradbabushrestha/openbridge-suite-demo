import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsShipSailboat(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ship-sailboat" {...props} />;
}

export default ObIconsShipSailboat;
