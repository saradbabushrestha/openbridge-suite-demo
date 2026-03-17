import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSettingsDefaultIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/settings-default-iec" {...props} />;
}

export default ObIconsSettingsDefaultIec;
