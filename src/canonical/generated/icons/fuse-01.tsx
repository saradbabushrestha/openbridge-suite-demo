import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFuse01(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/fuse-01" {...props} />;
}

export default ObIconsFuse01;
