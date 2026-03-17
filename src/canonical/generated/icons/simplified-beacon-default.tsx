import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSimplifiedBeaconDefault(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/simplified-beacon-default" {...props} />;
}

export default ObIconsSimplifiedBeaconDefault;
