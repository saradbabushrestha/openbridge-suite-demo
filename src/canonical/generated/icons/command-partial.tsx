import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandPartial(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-partial" {...props} />;
}

export default ObIconsCommandPartial;
