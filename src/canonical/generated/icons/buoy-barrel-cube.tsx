import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBuoyBarrelCube(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/buoy-barrel-cube" {...props} />;
}

export default ObIconsBuoyBarrelCube;
