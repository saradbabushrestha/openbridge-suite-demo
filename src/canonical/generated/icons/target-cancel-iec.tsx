import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTargetCancelIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/target-cancel-iec" {...props} />;
}

export default ObIconsTargetCancelIec;
