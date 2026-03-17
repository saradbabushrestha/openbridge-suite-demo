import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRank2(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/rank-2" {...props} />;
}

export default ObIconsRank2;
