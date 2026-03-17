import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsIdTag(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/id-tag" {...props} />;
}

export default ObIconsIdTag;
