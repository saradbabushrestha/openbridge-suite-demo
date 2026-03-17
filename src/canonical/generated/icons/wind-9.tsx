import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWind9(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wind-9" {...props} />;
}

export default ObIconsWind9;
