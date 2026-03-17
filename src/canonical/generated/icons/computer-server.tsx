import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsComputerServer(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/computer-server" {...props} />;
}

export default ObIconsComputerServer;
