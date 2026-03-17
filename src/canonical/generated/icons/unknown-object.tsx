import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsUnknownObject(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/unknown-object" {...props} />;
}

export default ObIconsUnknownObject;
