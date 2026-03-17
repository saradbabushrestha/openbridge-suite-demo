import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHome(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/home" {...props} />;
}

export default ObIconsHome;
