import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCurrent4(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/current-4" {...props} />;
}

export default ObIconsCurrent4;
