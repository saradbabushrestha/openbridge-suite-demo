import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../../runtime/openbridgeRegistry';

export function ObNavigationFinalsConningSpeedSpeedGauge(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="navigation/finals/conning/speed/speed-gauge" {...props} />;
}

export default ObNavigationFinalsConningSpeedSpeedGauge;
