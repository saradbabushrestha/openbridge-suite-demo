import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWireGoingTo(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wire-going-to" {...props} />;
}

export default ObIconsWireGoingTo;
