import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMediaLoop(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/media-loop" {...props} />;
}

export default ObIconsMediaLoop;
