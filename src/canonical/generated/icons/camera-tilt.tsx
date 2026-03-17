import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCameraTilt(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/camera-tilt" {...props} />;
}

export default ObIconsCameraTilt;
