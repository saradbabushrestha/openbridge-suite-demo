import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsResistor1(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/resistor-1" {...props} />;
}

export default ObIconsResistor1;
