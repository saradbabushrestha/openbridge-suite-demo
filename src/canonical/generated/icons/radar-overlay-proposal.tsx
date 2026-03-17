import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRadarOverlayProposal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/radar-overlay-proposal" {...props} />;
}

export default ObIconsRadarOverlayProposal;
