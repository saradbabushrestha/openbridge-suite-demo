import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMediaPlay(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/media-play" {...props} />;
}

export default ObIconsMediaPlay;
