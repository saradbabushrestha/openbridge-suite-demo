import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHdg(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/hdg" {...props} />;
}

export default ObIconsHdg;
