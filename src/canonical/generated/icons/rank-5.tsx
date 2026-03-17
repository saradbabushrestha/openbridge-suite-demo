import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRank5(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/rank-5" {...props} />;
}

export default ObIconsRank5;
