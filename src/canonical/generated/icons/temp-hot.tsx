import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTempHot(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/temp-hot" {...props} />;
}

export default ObIconsTempHot;
