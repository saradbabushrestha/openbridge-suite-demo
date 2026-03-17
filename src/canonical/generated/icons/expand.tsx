import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsExpand(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/expand" {...props} />;
}

export default ObIconsExpand;
