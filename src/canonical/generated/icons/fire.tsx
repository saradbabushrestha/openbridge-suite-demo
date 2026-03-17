import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFire(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/fire" {...props} />;
}

export default ObIconsFire;
