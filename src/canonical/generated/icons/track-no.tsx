import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTrackNo(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/track-no" {...props} />;
}

export default ObIconsTrackNo;
