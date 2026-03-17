import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCellLow(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cell-low" {...props} />;
}

export default ObIconsCellLow;
