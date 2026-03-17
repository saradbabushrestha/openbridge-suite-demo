import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLink(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/link" {...props} />;
}

export default ObIconsLink;
