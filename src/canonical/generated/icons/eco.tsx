import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEco(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/eco" {...props} />;
}

export default ObIconsEco;
