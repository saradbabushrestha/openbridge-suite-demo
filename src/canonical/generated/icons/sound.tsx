import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSound(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sound" {...props} />;
}

export default ObIconsSound;
