import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRock(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/rock" {...props} />;
}

export default ObIconsRock;
