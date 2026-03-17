import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsOpenSea(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/open-sea" {...props} />;
}

export default ObIconsOpenSea;
