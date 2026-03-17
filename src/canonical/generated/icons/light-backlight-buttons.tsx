import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightBacklightButtons(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-backlight-buttons" {...props} />;
}

export default ObIconsLightBacklightButtons;
