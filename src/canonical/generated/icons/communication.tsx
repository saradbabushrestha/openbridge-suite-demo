import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommunication(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/communication" {...props} />;
}

export default ObIconsCommunication;
