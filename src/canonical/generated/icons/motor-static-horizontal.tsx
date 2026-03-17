import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMotorStaticHorizontal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/motor-static-horizontal" {...props} />;
}

export default ObIconsMotorStaticHorizontal;
