import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConnectorThreeway(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/connector-threeway" {...props} />;
}

export default ObIconsConnectorThreeway;
