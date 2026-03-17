import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandTake(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-take" {...props} />;
}

export default ObIconsCommandTake;
