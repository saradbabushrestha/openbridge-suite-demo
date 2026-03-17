import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPipeDirection(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pipe-direction" {...props} />;
}

export default ObIconsPipeDirection;
