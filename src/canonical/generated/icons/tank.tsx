import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTank(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/tank" {...props} />;
}

export default ObIconsTank;
