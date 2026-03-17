import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightEmergencyOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-emergency-off" {...props} />;
}

export default ObIconsLightEmergencyOff;
