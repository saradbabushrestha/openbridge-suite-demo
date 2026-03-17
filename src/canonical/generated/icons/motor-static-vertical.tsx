import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMotorStaticVertical(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/motor-static-vertical" {...props} />;
}

export default ObIconsMotorStaticVertical;
