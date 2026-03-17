import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLocal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/local" {...props} />;
}

export default ObIconsLocal;
