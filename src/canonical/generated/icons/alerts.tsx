import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlerts(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alerts" {...props} />;
}

export default ObIconsAlerts;
