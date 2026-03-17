import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPitch(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pitch" {...props} />;
}

export default ObIconsPitch;
