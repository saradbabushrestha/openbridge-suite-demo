import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWind11(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wind-11" {...props} />;
}

export default ObIconsWind11;
