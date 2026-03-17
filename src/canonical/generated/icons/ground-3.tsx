import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGround3(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ground-3" {...props} />;
}

export default ObIconsGround3;
