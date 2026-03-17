import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSensorGpsMedium(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sensor-gps-medium" {...props} />;
}

export default ObIconsSensorGpsMedium;
