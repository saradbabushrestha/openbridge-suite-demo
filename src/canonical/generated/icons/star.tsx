import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsStar(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/star" {...props} />;
}

export default ObIconsStar;
