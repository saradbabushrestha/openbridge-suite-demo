import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBeaconMinorStake(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/beacon-minor-stake" {...props} />;
}

export default ObIconsBeaconMinorStake;
