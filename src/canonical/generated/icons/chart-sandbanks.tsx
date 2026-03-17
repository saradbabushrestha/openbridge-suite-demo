import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsChartSandbanks(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/chart-sandbanks" {...props} />;
}

export default ObIconsChartSandbanks;
