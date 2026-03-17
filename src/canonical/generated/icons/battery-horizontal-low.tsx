import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBatteryHorizontalLow(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/battery-horizontal-low" {...props} />;
}

export default ObIconsBatteryHorizontalLow;
