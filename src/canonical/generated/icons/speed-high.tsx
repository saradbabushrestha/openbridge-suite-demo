import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSpeedHigh(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/speed-high" {...props} />;
}

export default ObIconsSpeedHigh;
