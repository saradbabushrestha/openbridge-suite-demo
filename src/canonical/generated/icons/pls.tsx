import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPls(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pls" {...props} />;
}

export default ObIconsPls;
