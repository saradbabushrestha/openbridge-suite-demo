import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCellOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cell-off" {...props} />;
}

export default ObIconsCellOff;
