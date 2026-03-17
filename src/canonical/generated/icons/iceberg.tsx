import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsIceberg(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/iceberg" {...props} />;
}

export default ObIconsIceberg;
