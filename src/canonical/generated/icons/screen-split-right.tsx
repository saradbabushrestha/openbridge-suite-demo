import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsScreenSplitRight(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/screen-split-right" {...props} />;
}

export default ObIconsScreenSplitRight;
