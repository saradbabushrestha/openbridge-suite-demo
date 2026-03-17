import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRoute(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/route" {...props} />;
}

export default ObIconsRoute;
