import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsKeepingStation(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/keeping-station" {...props} />;
}

export default ObIconsKeepingStation;
