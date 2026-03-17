import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSensorGyro(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sensor-gyro" {...props} />;
}

export default ObIconsSensorGyro;
