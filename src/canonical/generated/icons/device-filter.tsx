import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDeviceFilter(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/device-filter" {...props} />;
}

export default ObIconsDeviceFilter;
