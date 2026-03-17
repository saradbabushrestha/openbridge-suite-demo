import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCellBad(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cell-bad" {...props} />;
}

export default ObIconsCellBad;
