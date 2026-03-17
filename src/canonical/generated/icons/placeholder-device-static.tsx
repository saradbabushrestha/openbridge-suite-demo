import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPlaceholderDeviceStatic(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/placeholder-device-static" {...props} />;
}

export default ObIconsPlaceholderDeviceStatic;
