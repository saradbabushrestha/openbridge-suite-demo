import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSimplifiedBuoyDefault(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/simplified-buoy-default" {...props} />;
}

export default ObIconsSimplifiedBuoyDefault;
