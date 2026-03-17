import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCellMedium(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cell-medium" {...props} />;
}

export default ObIconsCellMedium;
