import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGenericLineThreeway(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/generic-line-threeway" {...props} />;
}

export default ObIconsGenericLineThreeway;
