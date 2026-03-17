import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDiver(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/diver" {...props} />;
}

export default ObIconsDiver;
