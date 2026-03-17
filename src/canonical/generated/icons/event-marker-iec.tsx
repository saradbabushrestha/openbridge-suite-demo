import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEventMarkerIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/event-marker-iec" {...props} />;
}

export default ObIconsEventMarkerIec;
