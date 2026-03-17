import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSatelliteLow(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/satellite-low" {...props} />;
}

export default ObIconsSatelliteLow;
