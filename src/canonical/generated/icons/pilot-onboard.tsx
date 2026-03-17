import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPilotOnboard(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pilot-onboard" {...props} />;
}

export default ObIconsPilotOnboard;
