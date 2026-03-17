import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWhale(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/whale" {...props} />;
}

export default ObIconsWhale;
