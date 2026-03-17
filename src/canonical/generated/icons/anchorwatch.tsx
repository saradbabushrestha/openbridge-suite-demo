import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAnchorwatch(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/anchorwatch" {...props} />;
}

export default ObIconsAnchorwatch;
