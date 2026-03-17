import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConnectorGoingTo(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/connector-going-to" {...props} />;
}

export default ObIconsConnectorGoingTo;
