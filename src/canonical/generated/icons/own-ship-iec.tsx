import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsOwnShipIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/own-ship-iec" {...props} />;
}

export default ObIconsOwnShipIec;
