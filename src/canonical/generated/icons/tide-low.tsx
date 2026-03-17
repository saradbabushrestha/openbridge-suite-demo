import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTideLow(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/tide-low" {...props} />;
}

export default ObIconsTideLow;
