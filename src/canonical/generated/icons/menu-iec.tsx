import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMenuIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/menu-iec" {...props} />;
}

export default ObIconsMenuIec;
