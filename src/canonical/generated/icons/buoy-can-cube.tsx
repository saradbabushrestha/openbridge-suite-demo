import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBuoyCanCube(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/buoy-can-cube" {...props} />;
}

export default ObIconsBuoyCanCube;
