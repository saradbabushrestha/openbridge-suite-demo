import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPrint(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/print" {...props} />;
}

export default ObIconsPrint;
