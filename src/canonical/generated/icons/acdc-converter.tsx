import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAcdcConverter(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/acdc-converter" {...props} />;
}

export default ObIconsAcdcConverter;
