import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWireThreeway(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wire-threeway" {...props} />;
}

export default ObIconsWireThreeway;
