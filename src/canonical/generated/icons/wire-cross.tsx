import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWireCross(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wire-cross" {...props} />;
}

export default ObIconsWireCross;
