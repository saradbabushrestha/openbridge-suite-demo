import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHydraulicSeparator(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/hydraulic-separator" {...props} />;
}

export default ObIconsHydraulicSeparator;
