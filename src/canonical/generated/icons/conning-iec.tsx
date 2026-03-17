import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConningIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/conning-iec" {...props} />;
}

export default ObIconsConningIec;
