import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPumpOnHorizontal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pump-on-horizontal" {...props} />;
}

export default ObIconsPumpOnHorizontal;
