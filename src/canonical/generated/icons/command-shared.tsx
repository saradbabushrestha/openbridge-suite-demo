import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandShared(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-shared" {...props} />;
}

export default ObIconsCommandShared;
