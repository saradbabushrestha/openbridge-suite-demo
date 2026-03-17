import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPilotage(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pilotage" {...props} />;
}

export default ObIconsPilotage;
