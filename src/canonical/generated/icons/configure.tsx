import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConfigure(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/configure" {...props} />;
}

export default ObIconsConfigure;
