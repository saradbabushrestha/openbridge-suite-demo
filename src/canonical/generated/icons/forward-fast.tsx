import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsForwardFast(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/forward-fast" {...props} />;
}

export default ObIconsForwardFast;
