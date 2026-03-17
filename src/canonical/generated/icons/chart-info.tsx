import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsChartInfo(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/chart-info" {...props} />;
}

export default ObIconsChartInfo;
