import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAnchorIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/anchor-iec" {...props} />;
}

export default ObIconsAnchorIec;
