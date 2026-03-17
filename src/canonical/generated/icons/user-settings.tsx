import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsUserSettings(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/user-settings" {...props} />;
}

export default ObIconsUserSettings;
