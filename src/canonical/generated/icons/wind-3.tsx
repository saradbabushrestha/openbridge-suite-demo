import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWind3(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wind-3" {...props} />;
}

export default ObIconsWind3;
