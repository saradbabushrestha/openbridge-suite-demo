import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEnergyBattery(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/energy-battery" {...props} />;
}

export default ObIconsEnergyBattery;
