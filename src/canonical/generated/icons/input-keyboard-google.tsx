import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsInputKeyboardGoogle(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/input-keyboard-google" {...props} />;
}

export default ObIconsInputKeyboardGoogle;
