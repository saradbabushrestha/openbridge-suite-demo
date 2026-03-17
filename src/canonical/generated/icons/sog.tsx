import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSog(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sog" {...props} />;
}

export default ObIconsSog;
