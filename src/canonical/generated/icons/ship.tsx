import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsShip(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ship" {...props} />;
}

export default ObIconsShip;
