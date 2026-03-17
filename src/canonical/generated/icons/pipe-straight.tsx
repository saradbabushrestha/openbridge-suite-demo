import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPipeStraight(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pipe-straight" {...props} />;
}

export default ObIconsPipeStraight;
