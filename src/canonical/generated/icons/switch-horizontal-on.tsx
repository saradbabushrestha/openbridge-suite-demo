import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSwitchHorizontalOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/switch-horizontal-on" {...props} />;
}

export default ObIconsSwitchHorizontalOn;
