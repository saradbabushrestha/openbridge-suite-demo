import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouterOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/router-on" {...props} />;
}

export default ObIconsRouterOn;
