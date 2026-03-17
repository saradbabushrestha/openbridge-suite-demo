import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsKeepingTrack(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/keeping-track" {...props} />;
}

export default ObIconsKeepingTrack;
