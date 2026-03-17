import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDisplayBrillianceProposal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/display-brilliance-proposal" {...props} />;
}

export default ObIconsDisplayBrillianceProposal;
