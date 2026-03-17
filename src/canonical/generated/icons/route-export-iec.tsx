import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouteExportIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/route-export-iec" {...props} />;
}

export default ObIconsRouteExportIec;
