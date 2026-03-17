import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../runtime/openbridgeRegistry';

export function ObPropulsionFinalsControlsWindPropulsion(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="propulsion/finals/controls/wind-propulsion" {...props} />;
}

export default ObPropulsionFinalsControlsWindPropulsion;
