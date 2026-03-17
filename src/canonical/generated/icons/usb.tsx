import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsUsb(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/usb" {...props} />;
}

export default ObIconsUsb;
