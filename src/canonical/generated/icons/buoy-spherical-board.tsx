import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBuoySphericalBoard(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/buoy-spherical-board" {...props} />;
}

export default ObIconsBuoySphericalBoard;
