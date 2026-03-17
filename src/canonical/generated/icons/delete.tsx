import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDelete(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/delete" {...props} />;
}

export default ObIconsDelete;
