import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMonitoringRoute(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/monitoring-route" {...props} />;
}

export default ObIconsMonitoringRoute;
