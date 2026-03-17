import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouteExportProposal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/route-export-proposal" {...props} />;
}

export default ObIconsRouteExportProposal;
