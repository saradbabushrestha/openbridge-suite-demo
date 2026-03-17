import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTable(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/table" {...props} />;
}

export default ObIconsTable;
