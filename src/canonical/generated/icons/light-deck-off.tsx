import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightDeckOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-deck-off" {...props} />;
}

export default ObIconsLightDeckOff;
