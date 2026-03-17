import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSensorGpsFull(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sensor-gps-full" {...props} />;
}

export default ObIconsSensorGpsFull;
