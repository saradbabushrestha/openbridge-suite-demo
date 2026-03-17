import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../runtime/openbridgeRegistry';

export function ObReadoutFinalsValuesReadoutGroup(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="readout/finals/values/readout-group" {...props} />;
}

export default ObReadoutFinalsValuesReadoutGroup;
