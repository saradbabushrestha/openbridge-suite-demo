import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEnergyMethanol(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/energy-methanol" {...props} />;
}

export default ObIconsEnergyMethanol;
