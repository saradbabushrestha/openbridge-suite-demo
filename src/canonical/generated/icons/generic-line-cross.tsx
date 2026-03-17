import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGenericLineCross(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/generic-line-cross" {...props} />;
}

export default ObIconsGenericLineCross;
