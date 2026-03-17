import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFilter2(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/filter-2" {...props} />;
}

export default ObIconsFilter2;
