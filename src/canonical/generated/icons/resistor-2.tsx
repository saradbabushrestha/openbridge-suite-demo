import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsResistor2(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/resistor-2" {...props} />;
}

export default ObIconsResistor2;
