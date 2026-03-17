import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBeaconGeneralCube(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/beacon-general-cube" {...props} />;
}

export default ObIconsBeaconGeneralCube;
