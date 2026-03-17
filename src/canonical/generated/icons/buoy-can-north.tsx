import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBuoyCanNorth(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/buoy-can-north" {...props} />;
}

export default ObIconsBuoyCanNorth;
