import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSwitchHorizontalOnLarge(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/switch-horizontal-on-large" {...props} />;
}

export default ObIconsSwitchHorizontalOnLarge;
