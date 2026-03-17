import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSwimming(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/swimming" {...props} />;
}

export default ObIconsSwimming;
