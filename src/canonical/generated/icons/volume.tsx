import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsVolume(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/volume" {...props} />;
}

export default ObIconsVolume;
