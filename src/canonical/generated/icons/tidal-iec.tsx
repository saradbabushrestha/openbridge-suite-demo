import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTidalIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/tidal-iec" {...props} />;
}

export default ObIconsTidalIec;
