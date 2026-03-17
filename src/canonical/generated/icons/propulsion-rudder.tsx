import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPropulsionRudder(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/propulsion-rudder" {...props} />;
}

export default ObIconsPropulsionRudder;
