import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSwitchHorizontalOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/switch-horizontal-off" {...props} />;
}

export default ObIconsSwitchHorizontalOff;
