import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHeatPumpBalance(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/heat-pump-balance" {...props} />;
}

export default ObIconsHeatPumpBalance;
