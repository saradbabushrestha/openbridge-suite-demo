import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDockLeftGoogle(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/dock-left-google" {...props} />;
}

export default ObIconsDockLeftGoogle;
