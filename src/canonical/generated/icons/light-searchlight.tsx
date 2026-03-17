import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightSearchlight(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-searchlight" {...props} />;
}

export default ObIconsLightSearchlight;
