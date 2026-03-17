import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFilter1Off(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/filter-1-off" {...props} />;
}

export default ObIconsFilter1Off;
