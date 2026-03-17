import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPlsComponent(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pls-component" {...props} />;
}

export default ObIconsPlsComponent;
