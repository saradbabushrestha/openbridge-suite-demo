import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRunningColorIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/running-color-iec" {...props} />;
}

export default ObIconsRunningColorIec;
