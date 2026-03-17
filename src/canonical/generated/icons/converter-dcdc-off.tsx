import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConverterDcdcOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/converter-dcdc-off" {...props} />;
}

export default ObIconsConverterDcdcOff;
