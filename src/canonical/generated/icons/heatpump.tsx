import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHeatpump(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/heatpump" {...props} />;
}

export default ObIconsHeatpump;
