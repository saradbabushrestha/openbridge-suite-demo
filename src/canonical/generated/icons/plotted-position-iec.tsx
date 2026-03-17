import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPlottedPositionIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/plotted-position-iec" {...props} />;
}

export default ObIconsPlottedPositionIec;
