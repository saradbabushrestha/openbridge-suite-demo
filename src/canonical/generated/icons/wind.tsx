import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWind(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wind" {...props} />;
}

export default ObIconsWind;
