import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWipers(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wipers" {...props} />;
}

export default ObIconsWipers;
