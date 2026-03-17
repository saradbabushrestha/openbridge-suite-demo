import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCamHmiIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cam-hmi-iec" {...props} />;
}

export default ObIconsCamHmiIec;
