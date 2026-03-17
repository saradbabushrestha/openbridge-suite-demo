import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPropulsionStatic(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/propulsion-static" {...props} />;
}

export default ObIconsPropulsionStatic;
