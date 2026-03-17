import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSpeedGood(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/speed-good" {...props} />;
}

export default ObIconsSpeedGood;
