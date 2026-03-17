import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLocalOnly(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/local-only" {...props} />;
}

export default ObIconsLocalOnly;
