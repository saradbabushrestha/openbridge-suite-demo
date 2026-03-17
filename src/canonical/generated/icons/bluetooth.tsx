import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBluetooth(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/bluetooth" {...props} />;
}

export default ObIconsBluetooth;
