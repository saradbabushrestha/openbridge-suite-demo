import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAntennaOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/antenna-off" {...props} />;
}

export default ObIconsAntennaOff;
