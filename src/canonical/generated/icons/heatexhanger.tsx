import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHeatexhanger(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/heatexhanger" {...props} />;
}

export default ObIconsHeatexhanger;
