import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFilter1(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/filter-1" {...props} />;
}

export default ObIconsFilter1;
