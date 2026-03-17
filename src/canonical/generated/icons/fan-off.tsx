import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFanOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/fan-off" {...props} />;
}

export default ObIconsFanOff;
