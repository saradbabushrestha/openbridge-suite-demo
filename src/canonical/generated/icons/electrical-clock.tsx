import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsElectricalClock(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/electrical-clock" {...props} />;
}

export default ObIconsElectricalClock;
