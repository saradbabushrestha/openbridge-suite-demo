import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/on" {...props} />;
}

export default ObIconsOn;
