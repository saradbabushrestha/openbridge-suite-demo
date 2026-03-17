import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsContainer(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/container" {...props} />;
}

export default ObIconsContainer;
