import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConverterAcdc(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/converter-acdc" {...props} />;
}

export default ObIconsConverterAcdc;
