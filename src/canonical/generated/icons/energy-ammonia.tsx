import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEnergyAmmonia(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/energy-ammonia" {...props} />;
}

export default ObIconsEnergyAmmonia;
