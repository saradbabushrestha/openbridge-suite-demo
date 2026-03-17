import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPlaceholder(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/placeholder" {...props} />;
}

export default ObIconsPlaceholder;
