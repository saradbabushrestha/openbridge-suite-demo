import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsUpIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/up-iec" {...props} />;
}

export default ObIconsUpIec;
