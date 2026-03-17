import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAutonomous(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/autonomous" {...props} />;
}

export default ObIconsAutonomous;
