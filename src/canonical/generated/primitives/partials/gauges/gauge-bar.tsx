import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../runtime/openbridgeRegistry';

export function ObPrimitivesPartialsGaugesGaugeBar(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="primitives/partials/gauges/gauge-bar" {...props} />;
}

export default ObPrimitivesPartialsGaugesGaugeBar;
