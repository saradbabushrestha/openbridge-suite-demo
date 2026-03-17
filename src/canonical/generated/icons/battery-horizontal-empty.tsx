import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBatteryHorizontalEmpty(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/battery-horizontal-empty" {...props} />;
}

export default ObIconsBatteryHorizontalEmpty;
