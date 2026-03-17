import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsOnIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/on-iec" {...props} />;
}

export default ObIconsOnIec;
