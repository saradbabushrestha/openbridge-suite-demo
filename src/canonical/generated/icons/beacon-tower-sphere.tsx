import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBeaconTowerSphere(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/beacon-tower-sphere" {...props} />;
}

export default ObIconsBeaconTowerSphere;
