import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRot(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/rot" {...props} />;
}

export default ObIconsRot;
