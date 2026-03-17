import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPlaceholderDeviceOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/placeholder-device-on" {...props} />;
}

export default ObIconsPlaceholderDeviceOn;
