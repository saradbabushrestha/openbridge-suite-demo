import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsStw(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/stw" {...props} />;
}

export default ObIconsStw;
