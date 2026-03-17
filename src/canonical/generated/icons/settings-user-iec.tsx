import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSettingsUserIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/settings-user-iec" {...props} />;
}

export default ObIconsSettingsUserIec;
