import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMsiIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/msi-iec" {...props} />;
}

export default ObIconsMsiIec;
