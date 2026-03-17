import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsIas(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/ias" {...props} />;
}

export default ObIconsIas;
