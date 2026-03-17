import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDuctThreeway(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/duct-threeway" {...props} />;
}

export default ObIconsDuctThreeway;
