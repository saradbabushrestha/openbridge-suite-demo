import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsKeylineGrid(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/keyline-grid" {...props} />;
}

export default ObIconsKeylineGrid;
