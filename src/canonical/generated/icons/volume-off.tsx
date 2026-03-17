import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsVolumeOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/volume-off" {...props} />;
}

export default ObIconsVolumeOff;
