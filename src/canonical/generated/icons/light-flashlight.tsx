import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightFlashlight(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-flashlight" {...props} />;
}

export default ObIconsLightFlashlight;
