import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGround2(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ground-2" {...props} />;
}

export default ObIconsGround2;
