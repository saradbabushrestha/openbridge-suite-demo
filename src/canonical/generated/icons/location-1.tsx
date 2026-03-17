import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLocation1(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/location-1" {...props} />;
}

export default ObIconsLocation1;
