import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsIo(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/io" {...props} />;
}

export default ObIconsIo;
