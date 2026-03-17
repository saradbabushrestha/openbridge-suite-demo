import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsOffIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/off-iec" {...props} />;
}

export default ObIconsOffIec;
