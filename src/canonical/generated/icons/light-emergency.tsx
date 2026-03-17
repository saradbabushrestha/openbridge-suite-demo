import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightEmergency(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-emergency" {...props} />;
}

export default ObIconsLightEmergency;
