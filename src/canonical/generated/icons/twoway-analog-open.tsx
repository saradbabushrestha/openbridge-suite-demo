import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTwowayAnalogOpen(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/twoway-analog-open" {...props} />;
}

export default ObIconsTwowayAnalogOpen;
