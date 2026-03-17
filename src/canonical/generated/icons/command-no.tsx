import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandNo(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-no" {...props} />;
}

export default ObIconsCommandNo;
