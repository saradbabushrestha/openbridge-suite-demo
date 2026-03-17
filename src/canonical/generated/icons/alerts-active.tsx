import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlertsActive(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alerts-active" {...props} />;
}

export default ObIconsAlertsActive;
