import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPipeOverlap(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pipe-overlap" {...props} />;
}

export default ObIconsPipeOverlap;
