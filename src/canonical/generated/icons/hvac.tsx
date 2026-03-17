import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHvac(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/hvac" {...props} />;
}

export default ObIconsHvac;
