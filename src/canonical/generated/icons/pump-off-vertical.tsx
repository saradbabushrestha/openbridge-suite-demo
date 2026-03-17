import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPumpOffVertical(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pump-off-vertical" {...props} />;
}

export default ObIconsPumpOffVertical;
