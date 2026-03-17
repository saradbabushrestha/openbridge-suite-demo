import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEcdisIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ecdis-iec" {...props} />;
}

export default ObIconsEcdisIec;
