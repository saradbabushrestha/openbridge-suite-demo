import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLineOfPosition(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/line-of-position" {...props} />;
}

export default ObIconsLineOfPosition;
