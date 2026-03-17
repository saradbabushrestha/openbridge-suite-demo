import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMediaLive(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/media-live" {...props} />;
}

export default ObIconsMediaLive;
