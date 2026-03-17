import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../../runtime/openbridgeRegistry';

export function ObReadoutFinalsValuesLayoutPresetsGaugeReadout(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="readout/finals/values/layout-presets/gauge-readout" {...props} />;
}

export default ObReadoutFinalsValuesLayoutPresetsGaugeReadout;
