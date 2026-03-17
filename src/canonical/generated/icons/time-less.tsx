import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTimeLess(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/time-less" {...props} />;
}

export default ObIconsTimeLess;
