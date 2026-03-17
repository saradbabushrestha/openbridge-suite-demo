import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWireEndPoint(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wire-end-point" {...props} />;
}

export default ObIconsWireEndPoint;
