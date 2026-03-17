import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTrackOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/track-on" {...props} />;
}

export default ObIconsTrackOn;
