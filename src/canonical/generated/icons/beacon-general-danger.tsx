import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBeaconGeneralDanger(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/beacon-general-danger" {...props} />;
}

export default ObIconsBeaconGeneralDanger;
