import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSMode(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/s-mode" {...props} />;
}

export default ObIconsSMode;
