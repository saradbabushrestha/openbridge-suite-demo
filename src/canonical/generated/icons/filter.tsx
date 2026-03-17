import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFilter(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/filter" {...props} />;
}

export default ObIconsFilter;
