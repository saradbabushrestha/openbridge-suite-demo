import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPropulsionAzimuthThruster(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/propulsion-azimuth-thruster" {...props} />;
}

export default ObIconsPropulsionAzimuthThruster;
