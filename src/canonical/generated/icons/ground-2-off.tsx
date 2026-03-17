import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGround2Off(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ground-2-off" {...props} />;
}

export default ObIconsGround2Off;
