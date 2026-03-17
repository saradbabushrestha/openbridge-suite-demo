import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDashboard(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/dashboard" {...props} />;
}

export default ObIconsDashboard;
