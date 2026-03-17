import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSatelliteMedium(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/satellite-medium" {...props} />;
}

export default ObIconsSatelliteMedium;
