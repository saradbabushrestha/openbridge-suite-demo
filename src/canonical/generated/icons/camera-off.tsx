import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCameraOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/camera-off" {...props} />;
}

export default ObIconsCameraOff;
