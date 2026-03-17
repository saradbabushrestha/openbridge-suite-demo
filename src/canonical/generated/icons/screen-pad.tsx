import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsScreenPad(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/screen-pad" {...props} />;
}

export default ObIconsScreenPad;
