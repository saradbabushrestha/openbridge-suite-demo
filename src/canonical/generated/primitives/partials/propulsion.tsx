import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../runtime/openbridgeRegistry';

export function ObPrimitivesPartialsPropulsion(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="primitives/partials/propulsion" {...props} />;
}

export default ObPrimitivesPartialsPropulsion;
