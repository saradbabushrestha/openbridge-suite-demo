import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBacklightHigh(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/backlight-high" {...props} />;
}

export default ObIconsBacklightHigh;
