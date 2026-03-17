import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFilter3(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/filter-3" {...props} />;
}

export default ObIconsFilter3;
