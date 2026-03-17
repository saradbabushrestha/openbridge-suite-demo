import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAltitude(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/altitude" {...props} />;
}

export default ObIconsAltitude;
