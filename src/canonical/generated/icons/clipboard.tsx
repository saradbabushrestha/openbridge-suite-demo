import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsClipboard(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/clipboard" {...props} />;
}

export default ObIconsClipboard;
