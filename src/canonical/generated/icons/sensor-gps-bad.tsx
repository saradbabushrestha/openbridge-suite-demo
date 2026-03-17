import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSensorGpsBad(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sensor-gps-bad" {...props} />;
}

export default ObIconsSensorGpsBad;
