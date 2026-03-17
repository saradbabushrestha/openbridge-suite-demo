import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlertSettings(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alert-settings" {...props} />;
}

export default ObIconsAlertSettings;
