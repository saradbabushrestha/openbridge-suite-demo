import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsThreewayStackedClosed(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/threeway-stacked-closed" {...props} />;
}

export default ObIconsThreewayStackedClosed;
