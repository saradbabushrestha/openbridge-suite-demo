import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPropulsionMainEngine(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/propulsion-main-engine" {...props} />;
}

export default ObIconsPropulsionMainEngine;
