import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandIn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-in" {...props} />;
}

export default ObIconsCommandIn;
