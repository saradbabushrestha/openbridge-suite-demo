import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPastPositionIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/past-position-iec" {...props} />;
}

export default ObIconsPastPositionIec;
