import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTwowayAnalogClosed(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/twoway-analog-closed" {...props} />;
}

export default ObIconsTwowayAnalogClosed;
