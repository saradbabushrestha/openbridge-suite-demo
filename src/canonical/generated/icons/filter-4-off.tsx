import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFilter4Off(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/filter-4-off" {...props} />;
}

export default ObIconsFilter4Off;
