import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCoffee(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/coffee" {...props} />;
}

export default ObIconsCoffee;
