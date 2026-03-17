import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightBulbOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-bulb-on" {...props} />;
}

export default ObIconsLightBulbOn;
