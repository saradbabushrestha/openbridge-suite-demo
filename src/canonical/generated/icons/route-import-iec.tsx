import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouteImportIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/route-import-iec" {...props} />;
}

export default ObIconsRouteImportIec;
