import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSpeedLow(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/speed-low" {...props} />;
}

export default ObIconsSpeedLow;
