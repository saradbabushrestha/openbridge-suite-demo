import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsInfo(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/info" {...props} />;
}

export default ObIconsInfo;
