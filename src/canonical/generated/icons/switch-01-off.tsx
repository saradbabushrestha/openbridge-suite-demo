import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSwitch01Off(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/switch-01-off" {...props} />;
}

export default ObIconsSwitch01Off;
