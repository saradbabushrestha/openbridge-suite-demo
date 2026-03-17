import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRoutePlanning(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/route-planning" {...props} />;
}

export default ObIconsRoutePlanning;
