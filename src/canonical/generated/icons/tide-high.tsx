import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTideHigh(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/tide-high" {...props} />;
}

export default ObIconsTideHigh;
