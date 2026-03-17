import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEnergyPetrol(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/energy-petrol" {...props} />;
}

export default ObIconsEnergyPetrol;
