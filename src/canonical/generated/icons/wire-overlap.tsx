import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWireOverlap(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wire-overlap" {...props} />;
}

export default ObIconsWireOverlap;
