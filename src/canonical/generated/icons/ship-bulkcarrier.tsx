import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsShipBulkcarrier(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ship-bulkcarrier" {...props} />;
}

export default ObIconsShipBulkcarrier;
