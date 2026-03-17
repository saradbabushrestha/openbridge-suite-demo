import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouterComponent(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/router-component" {...props} />;
}

export default ObIconsRouterComponent;
