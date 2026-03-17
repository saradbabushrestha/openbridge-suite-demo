import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLinkRemove(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/link-remove" {...props} />;
}

export default ObIconsLinkRemove;
