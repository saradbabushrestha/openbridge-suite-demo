import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTurn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/turn" {...props} />;
}

export default ObIconsTurn;
