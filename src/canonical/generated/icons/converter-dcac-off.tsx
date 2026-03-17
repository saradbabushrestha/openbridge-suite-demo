import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConverterDcacOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/converter-dcac-off" {...props} />;
}

export default ObIconsConverterDcacOff;
