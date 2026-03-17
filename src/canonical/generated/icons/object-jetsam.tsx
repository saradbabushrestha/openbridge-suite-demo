import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsObjectJetsam(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/object-jetsam" {...props} />;
}

export default ObIconsObjectJetsam;
