import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLocation2(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/location-2" {...props} />;
}

export default ObIconsLocation2;
