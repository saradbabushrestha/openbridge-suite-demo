import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouter(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/router" {...props} />;
}

export default ObIconsRouter;
