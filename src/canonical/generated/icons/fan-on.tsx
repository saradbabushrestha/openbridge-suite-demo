import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFanOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/fan-on" {...props} />;
}

export default ObIconsFanOn;
