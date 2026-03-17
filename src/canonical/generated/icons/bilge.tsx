import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBilge(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/bilge" {...props} />;
}

export default ObIconsBilge;
