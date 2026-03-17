import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCellFull(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cell-full" {...props} />;
}

export default ObIconsCellFull;
