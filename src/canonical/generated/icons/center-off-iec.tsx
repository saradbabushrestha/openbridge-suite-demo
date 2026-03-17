import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCenterOffIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/center-off-iec" {...props} />;
}

export default ObIconsCenterOffIec;
