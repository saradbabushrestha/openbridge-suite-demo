import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMove(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/move" {...props} />;
}

export default ObIconsMove;
