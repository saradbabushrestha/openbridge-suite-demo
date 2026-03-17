import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsUsbStick(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/usb-stick" {...props} />;
}

export default ObIconsUsbStick;
