import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHeave(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/heave" {...props} />;
}

export default ObIconsHeave;
