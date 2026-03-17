import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAuto(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/auto" {...props} />;
}

export default ObIconsAuto;
