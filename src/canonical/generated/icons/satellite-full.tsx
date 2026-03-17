import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSatelliteFull(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/satellite-full" {...props} />;
}

export default ObIconsSatelliteFull;
