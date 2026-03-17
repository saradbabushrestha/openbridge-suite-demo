import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSpeed(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/speed" {...props} />;
}

export default ObIconsSpeed;
