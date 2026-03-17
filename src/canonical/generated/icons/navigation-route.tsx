import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsNavigationRoute(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/navigation-route" {...props} />;
}

export default ObIconsNavigationRoute;
