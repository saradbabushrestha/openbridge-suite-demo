import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTransformer01Off(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/transformer-01-off" {...props} />;
}

export default ObIconsTransformer01Off;
