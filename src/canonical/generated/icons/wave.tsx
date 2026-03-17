import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWave(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/wave" {...props} />;
}

export default ObIconsWave;
