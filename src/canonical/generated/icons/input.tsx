import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsInput(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/input" {...props} />;
}

export default ObIconsInput;
