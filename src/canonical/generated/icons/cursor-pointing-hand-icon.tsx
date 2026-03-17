import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCursorPointingHandIcon(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cursor-pointing-hand-icon" {...props} />;
}

export default ObIconsCursorPointingHandIcon;
