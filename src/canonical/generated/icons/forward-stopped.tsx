import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsForwardStopped(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/forward-stopped" {...props} />;
}

export default ObIconsForwardStopped;
