import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsThreewayStackedOpen(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/threeway-stacked-open" {...props} />;
}

export default ObIconsThreewayStackedOpen;
