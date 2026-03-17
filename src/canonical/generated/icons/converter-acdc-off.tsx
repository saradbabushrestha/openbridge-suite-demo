import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConverterAcdcOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/converter-acdc-off" {...props} />;
}

export default ObIconsConverterAcdcOff;
