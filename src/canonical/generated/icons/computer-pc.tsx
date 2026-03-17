import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsComputerPc(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/computer-pc" {...props} />;
}

export default ObIconsComputerPc;
