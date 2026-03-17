import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPumpOffHorizontal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pump-off-horizontal" {...props} />;
}

export default ObIconsPumpOffHorizontal;
