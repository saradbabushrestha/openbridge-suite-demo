import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTransformer02On(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/transformer-02-on" {...props} />;
}

export default ObIconsTransformer02On;
