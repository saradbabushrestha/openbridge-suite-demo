import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRadarIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/radar-iec" {...props} />;
}

export default ObIconsRadarIec;
