import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCurrent(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/current" {...props} />;
}

export default ObIconsCurrent;
