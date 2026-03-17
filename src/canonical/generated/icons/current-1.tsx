import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCurrent1(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/current-1" {...props} />;
}

export default ObIconsCurrent1;
