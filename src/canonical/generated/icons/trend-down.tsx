import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTrendDown(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/trend-down" {...props} />;
}

export default ObIconsTrendDown;
