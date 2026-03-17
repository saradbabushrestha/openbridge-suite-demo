import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCrane(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/crane" {...props} />;
}

export default ObIconsCrane;
