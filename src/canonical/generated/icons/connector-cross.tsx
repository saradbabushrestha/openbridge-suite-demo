import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConnectorCross(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/connector-cross" {...props} />;
}

export default ObIconsConnectorCross;
