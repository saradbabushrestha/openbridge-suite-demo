import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBatteryVerticalEmpty(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/battery-vertical-empty" {...props} />;
}

export default ObIconsBatteryVerticalEmpty;
