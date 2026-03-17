import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTrackOffStrb(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/track-off-strb" {...props} />;
}

export default ObIconsTrackOffStrb;
