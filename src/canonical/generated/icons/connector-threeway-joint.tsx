import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConnectorThreewayJoint(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/connector-threeway-joint" {...props} />;
}

export default ObIconsConnectorThreewayJoint;
