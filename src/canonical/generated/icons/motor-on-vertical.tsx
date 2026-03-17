import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMotorOnVertical(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/motor-on-vertical" {...props} />;
}

export default ObIconsMotorOnVertical;
