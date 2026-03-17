import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandAvailable(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-available" {...props} />;
}

export default ObIconsCommandAvailable;
