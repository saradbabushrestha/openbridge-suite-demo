import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../runtime/openbridgeRegistry';

export function ObReadoutFinalsValuesReadoutListItem(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="readout/finals/values/readout-list-item" {...props} />;
}

export default ObReadoutFinalsValuesReadoutListItem;
