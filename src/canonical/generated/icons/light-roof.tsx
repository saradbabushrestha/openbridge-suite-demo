import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightRoof(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-roof" {...props} />;
}

export default ObIconsLightRoof;
