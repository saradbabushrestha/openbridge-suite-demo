import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsChart(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/chart" {...props} />;
}

export default ObIconsChart;
