import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDcdcConverter(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/dcdc-converter" {...props} />;
}

export default ObIconsDcdcConverter;
