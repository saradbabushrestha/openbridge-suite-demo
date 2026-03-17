import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRank1(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/rank-1" {...props} />;
}

export default ObIconsRank1;
