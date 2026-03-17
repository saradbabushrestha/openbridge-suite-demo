import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouterOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/router-off" {...props} />;
}

export default ObIconsRouterOff;
