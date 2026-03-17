import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCursorMapIcon(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cursor-map-icon" {...props} />;
}

export default ObIconsCursorMapIcon;
