import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMonitoring(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/monitoring" {...props} />;
}

export default ObIconsMonitoring;
