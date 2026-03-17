import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPipeThreeway(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pipe-threeway" {...props} />;
}

export default ObIconsPipeThreeway;
