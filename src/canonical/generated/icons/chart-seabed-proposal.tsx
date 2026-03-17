import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsChartSeabedProposal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/chart-seabed-proposal" {...props} />;
}

export default ObIconsChartSeabedProposal;
