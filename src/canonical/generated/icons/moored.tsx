import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMoored(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/moored" {...props} />;
}

export default ObIconsMoored;
