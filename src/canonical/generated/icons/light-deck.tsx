import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightDeck(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-deck" {...props} />;
}

export default ObIconsLightDeck;
