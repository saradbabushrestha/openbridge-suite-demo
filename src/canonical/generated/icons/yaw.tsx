import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsYaw(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/yaw" {...props} />;
}

export default ObIconsYaw;
