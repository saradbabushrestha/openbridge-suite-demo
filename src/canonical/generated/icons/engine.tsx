import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEngine(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/engine" {...props} />;
}

export default ObIconsEngine;
