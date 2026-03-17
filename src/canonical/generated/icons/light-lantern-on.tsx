import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightLanternOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-lantern-on" {...props} />;
}

export default ObIconsLightLanternOn;
