import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCursorOpenHandIcon(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cursor-open-hand-icon" {...props} />;
}

export default ObIconsCursorOpenHandIcon;
