import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConnectorCorner(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/connector-corner" {...props} />;
}

export default ObIconsConnectorCorner;
