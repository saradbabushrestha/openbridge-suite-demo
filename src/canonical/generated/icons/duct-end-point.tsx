import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDuctEndPoint(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/duct-end-point" {...props} />;
}

export default ObIconsDuctEndPoint;
