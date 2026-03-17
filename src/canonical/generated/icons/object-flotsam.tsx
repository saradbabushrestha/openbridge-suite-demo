import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsObjectFlotsam(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/object-flotsam" {...props} />;
}

export default ObIconsObjectFlotsam;
