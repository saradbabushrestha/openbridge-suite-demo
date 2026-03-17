import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightBulb(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-bulb" {...props} />;
}

export default ObIconsLightBulb;
