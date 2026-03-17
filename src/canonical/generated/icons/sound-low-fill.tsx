import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSoundLowFill(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sound-low-fill" {...props} />;
}

export default ObIconsSoundLowFill;
