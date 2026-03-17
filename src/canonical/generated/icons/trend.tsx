import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTrend(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/trend" {...props} />;
}

export default ObIconsTrend;
