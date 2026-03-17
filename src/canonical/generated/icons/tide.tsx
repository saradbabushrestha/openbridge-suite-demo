import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTide(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/tide" {...props} />;
}

export default ObIconsTide;
