import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMediaSkipNext(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/media-skip-next" {...props} />;
}

export default ObIconsMediaSkipNext;
