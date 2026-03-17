import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLatched(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/latched" {...props} />;
}

export default ObIconsLatched;
