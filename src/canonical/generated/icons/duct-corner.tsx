import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDuctCorner(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/duct-corner" {...props} />;
}

export default ObIconsDuctCorner;
