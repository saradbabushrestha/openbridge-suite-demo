import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsUndoIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/undo-iec" {...props} />;
}

export default ObIconsUndoIec;
