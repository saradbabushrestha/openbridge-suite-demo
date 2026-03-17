import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBackwardStopped(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/backward-stopped" {...props} />;
}

export default ObIconsBackwardStopped;
