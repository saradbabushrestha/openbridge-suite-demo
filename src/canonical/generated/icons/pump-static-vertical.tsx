import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPumpStaticVertical(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pump-static-vertical" {...props} />;
}

export default ObIconsPumpStaticVertical;
