import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWiperFluid(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wiper-fluid" {...props} />;
}

export default ObIconsWiperFluid;
