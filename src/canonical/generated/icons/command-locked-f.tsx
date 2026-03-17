import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandLockedF(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-locked-f" {...props} />;
}

export default ObIconsCommandLockedF;
