import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCurrent3(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/current-3" {...props} />;
}

export default ObIconsCurrent3;
