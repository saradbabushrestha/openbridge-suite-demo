import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEthernetSwitch(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ethernet-switch" {...props} />;
}

export default ObIconsEthernetSwitch;
