import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSettingsIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/settings-iec" {...props} />;
}

export default ObIconsSettingsIec;
