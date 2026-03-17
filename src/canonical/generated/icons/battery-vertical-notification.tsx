import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBatteryVerticalNotification(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/battery-vertical-notification" {...props} />;
}

export default ObIconsBatteryVerticalNotification;
