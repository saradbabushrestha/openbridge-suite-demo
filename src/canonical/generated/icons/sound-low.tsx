import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSoundLow(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sound-low" {...props} />;
}

export default ObIconsSoundLow;
