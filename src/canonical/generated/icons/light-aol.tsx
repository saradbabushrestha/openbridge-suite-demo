import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightAol(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-aol" {...props} />;
}

export default ObIconsLightAol;
