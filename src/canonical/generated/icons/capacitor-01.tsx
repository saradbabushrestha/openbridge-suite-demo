import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCapacitor01(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/capacitor-01" {...props} />;
}

export default ObIconsCapacitor01;
