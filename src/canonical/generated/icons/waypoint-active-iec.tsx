import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWaypointActiveIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/waypoint-active-iec" {...props} />;
}

export default ObIconsWaypointActiveIec;
