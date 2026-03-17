import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCenterIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/center-iec" {...props} />;
}

export default ObIconsCenterIec;
