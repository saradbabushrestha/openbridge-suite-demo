import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGround1Off(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ground-1-off" {...props} />;
}

export default ObIconsGround1Off;
