import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsResizeVerticalTop(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/resize-vertical-top" {...props} />;
}

export default ObIconsResizeVerticalTop;
