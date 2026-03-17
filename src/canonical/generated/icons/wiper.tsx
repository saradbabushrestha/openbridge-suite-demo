import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWiper(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wiper" {...props} />;
}

export default ObIconsWiper;
