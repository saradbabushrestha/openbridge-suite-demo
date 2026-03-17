import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsChartUpdateReview(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/chart-update-review" {...props} />;
}

export default ObIconsChartUpdateReview;
