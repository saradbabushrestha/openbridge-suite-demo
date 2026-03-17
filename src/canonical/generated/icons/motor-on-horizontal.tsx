import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMotorOnHorizontal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/motor-on-horizontal" {...props} />;
}

export default ObIconsMotorOnHorizontal;
