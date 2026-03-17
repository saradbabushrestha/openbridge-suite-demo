import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRunning(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/running" {...props} />;
}

export default ObIconsRunning;
