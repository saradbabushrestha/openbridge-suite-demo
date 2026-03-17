import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsComPa(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/com-pa" {...props} />;
}

export default ObIconsComPa;
