import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRank3(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/rank-3" {...props} />;
}

export default ObIconsRank3;
