import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCurrent2(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/current-2" {...props} />;
}

export default ObIconsCurrent2;
