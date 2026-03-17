import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTime(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/time" {...props} />;
}

export default ObIconsTime;
