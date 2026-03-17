import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTransformer01(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/transformer-01" {...props} />;
}

export default ObIconsTransformer01;
