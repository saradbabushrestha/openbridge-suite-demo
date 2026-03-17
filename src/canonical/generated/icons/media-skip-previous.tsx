import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMediaSkipPrevious(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/media-skip-previous" {...props} />;
}

export default ObIconsMediaSkipPrevious;
