import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCameraOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/camera-on" {...props} />;
}

export default ObIconsCameraOn;
