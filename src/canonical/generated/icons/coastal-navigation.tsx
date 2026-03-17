import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCoastalNavigation(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/coastal-navigation" {...props} />;
}

export default ObIconsCoastalNavigation;
