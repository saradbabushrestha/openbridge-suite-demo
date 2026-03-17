import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMediaPause(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/media-pause" {...props} />;
}

export default ObIconsMediaPause;
