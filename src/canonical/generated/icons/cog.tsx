import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCog(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/cog" {...props} />;
}

export default ObIconsCog;
