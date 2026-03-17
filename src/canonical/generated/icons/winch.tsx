import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWinch(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/winch" {...props} />;
}

export default ObIconsWinch;
