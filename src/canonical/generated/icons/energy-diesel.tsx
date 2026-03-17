import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEnergyDiesel(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/energy-diesel" {...props} />;
}

export default ObIconsEnergyDiesel;
