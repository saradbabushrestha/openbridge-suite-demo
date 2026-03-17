import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTimeMore(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/time-more" {...props} />;
}

export default ObIconsTimeMore;
