import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsKayaking(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/kayaking" {...props} />;
}

export default ObIconsKayaking;
