import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGenericLineOverlap(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/generic-line-overlap" {...props} />;
}

export default ObIconsGenericLineOverlap;
