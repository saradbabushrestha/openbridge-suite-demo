import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsKeepingArea(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/keeping-area" {...props} />;
}

export default ObIconsKeepingArea;
