import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLimitsAttention(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/limits-attention" {...props} />;
}

export default ObIconsLimitsAttention;
