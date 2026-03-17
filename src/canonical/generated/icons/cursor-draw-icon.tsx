import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCursorDrawIcon(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cursor-draw-icon" {...props} />;
}

export default ObIconsCursorDrawIcon;
