import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsResizeVerticalCenter(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/resize-vertical-center" {...props} />;
}

export default ObIconsResizeVerticalCenter;
