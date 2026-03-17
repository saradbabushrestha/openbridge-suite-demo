import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightLanternPort(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-lantern-port" {...props} />;
}

export default ObIconsLightLanternPort;
