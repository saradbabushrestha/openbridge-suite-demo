import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRank4(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/rank-4" {...props} />;
}

export default ObIconsRank4;
