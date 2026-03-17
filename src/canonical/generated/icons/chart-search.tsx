import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsChartSearch(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/chart-search" {...props} />;
}

export default ObIconsChartSearch;
