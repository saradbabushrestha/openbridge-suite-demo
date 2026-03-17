import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSearch(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/search" {...props} />;
}

export default ObIconsSearch;
