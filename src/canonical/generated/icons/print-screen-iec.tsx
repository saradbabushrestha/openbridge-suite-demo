import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPrintScreenIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/print-screen-iec" {...props} />;
}

export default ObIconsPrintScreenIec;
