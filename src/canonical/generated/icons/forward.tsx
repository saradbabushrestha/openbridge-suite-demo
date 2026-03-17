import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsForward(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/forward" {...props} />;
}

export default ObIconsForward;
