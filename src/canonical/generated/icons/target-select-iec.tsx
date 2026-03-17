import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTargetSelectIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/target-select-iec" {...props} />;
}

export default ObIconsTargetSelectIec;
