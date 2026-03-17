import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBackwardFast(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/backward-fast" {...props} />;
}

export default ObIconsBackwardFast;
