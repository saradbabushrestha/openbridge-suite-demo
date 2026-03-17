import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../runtime/openbridgeRegistry';

export function ObPrimitivesPartialsEnvironment(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="primitives/partials/environment" {...props} />;
}

export default ObPrimitivesPartialsEnvironment;
