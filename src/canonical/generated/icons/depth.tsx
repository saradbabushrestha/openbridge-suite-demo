import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDepth(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/depth" {...props} />;
}

export default ObIconsDepth;
