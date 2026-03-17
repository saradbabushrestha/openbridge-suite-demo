import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsScreenQuad(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/screen-quad" {...props} />;
}

export default ObIconsScreenQuad;
