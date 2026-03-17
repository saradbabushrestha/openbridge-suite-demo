import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSystem(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/system" {...props} />;
}

export default ObIconsSystem;
