import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAntenna(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/antenna" {...props} />;
}

export default ObIconsAntenna;
