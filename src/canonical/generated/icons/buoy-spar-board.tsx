import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBuoySparBoard(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/buoy-spar-board" {...props} />;
}

export default ObIconsBuoySparBoard;
