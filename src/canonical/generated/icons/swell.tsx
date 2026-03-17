import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSwell(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/swell" {...props} />;
}

export default ObIconsSwell;
