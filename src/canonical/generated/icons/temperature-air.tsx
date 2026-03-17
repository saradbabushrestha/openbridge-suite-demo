import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTemperatureAir(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/temperature-air" {...props} />;
}

export default ObIconsTemperatureAir;
