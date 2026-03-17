import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGround1(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ground-1" {...props} />;
}

export default ObIconsGround1;
