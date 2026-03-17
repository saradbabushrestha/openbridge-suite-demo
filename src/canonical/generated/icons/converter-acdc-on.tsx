import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConverterAcdcOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/converter-acdc-on" {...props} />;
}

export default ObIconsConverterAcdcOn;
