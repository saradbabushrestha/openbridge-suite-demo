import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsOnOffIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/on-off-iec" {...props} />;
}

export default ObIconsOnOffIec;
