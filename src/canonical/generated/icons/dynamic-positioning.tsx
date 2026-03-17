import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDynamicPositioning(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/dynamic-positioning" {...props} />;
}

export default ObIconsDynamicPositioning;
