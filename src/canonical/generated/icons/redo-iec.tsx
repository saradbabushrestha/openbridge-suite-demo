import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRedoIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/redo-iec" {...props} />;
}

export default ObIconsRedoIec;
