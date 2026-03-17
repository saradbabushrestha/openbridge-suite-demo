import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWaypointAddIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/waypoint-add-iec" {...props} />;
}

export default ObIconsWaypointAddIec;
