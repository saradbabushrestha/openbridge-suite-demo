import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsVolumeOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/volume-on" {...props} />;
}

export default ObIconsVolumeOn;
