import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTrackOffPort(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/track-off-port" {...props} />;
}

export default ObIconsTrackOffPort;
