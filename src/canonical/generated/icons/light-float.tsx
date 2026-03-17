import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightFloat(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-float" {...props} />;
}

export default ObIconsLightFloat;
