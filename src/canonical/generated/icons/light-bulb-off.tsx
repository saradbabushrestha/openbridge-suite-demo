import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightBulbOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-bulb-off" {...props} />;
}

export default ObIconsLightBulbOff;
