import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../../runtime/openbridgeRegistry';

export function ObMotionFinalsDynamics6DofHeave(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="motion/finals/dynamics/6-dof/heave" {...props} />;
}

export default ObMotionFinalsDynamics6DofHeave;
