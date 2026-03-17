import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../runtime/openbridgeRegistry';

export function ObPrimitivesPartialsGauges(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="primitives/partials/gauges" {...props} />;
}

export default ObPrimitivesPartialsGauges;
