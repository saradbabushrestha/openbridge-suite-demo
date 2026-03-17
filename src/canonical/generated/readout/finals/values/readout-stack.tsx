import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../runtime/openbridgeRegistry';

export function ObReadoutFinalsValuesReadoutStack(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="readout/finals/values/readout-stack" {...props} />;
}

export default ObReadoutFinalsValuesReadoutStack;
