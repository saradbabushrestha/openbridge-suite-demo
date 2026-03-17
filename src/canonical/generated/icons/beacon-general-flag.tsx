import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBeaconGeneralFlag(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/beacon-general-flag" {...props} />;
}

export default ObIconsBeaconGeneralFlag;
