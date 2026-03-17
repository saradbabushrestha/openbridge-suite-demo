import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandLocked(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-locked" {...props} />;
}

export default ObIconsCommandLocked;
