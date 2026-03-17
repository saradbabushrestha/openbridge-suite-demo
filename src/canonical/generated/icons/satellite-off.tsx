import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSatelliteOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/satellite-off" {...props} />;
}

export default ObIconsSatelliteOff;
