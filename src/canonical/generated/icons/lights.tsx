import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLights(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/lights" {...props} />;
}

export default ObIconsLights;
