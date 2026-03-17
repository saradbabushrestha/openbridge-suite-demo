import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRotate(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/rotate" {...props} />;
}

export default ObIconsRotate;
