import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBatteryPackCharging(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/battery-pack-charging" {...props} />;
}

export default ObIconsBatteryPackCharging;
