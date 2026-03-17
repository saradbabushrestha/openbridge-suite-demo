import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsScreenSplitTop(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/screen-split-top" {...props} />;
}

export default ObIconsScreenSplitTop;
