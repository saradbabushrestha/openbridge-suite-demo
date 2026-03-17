import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPaletteDusk(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/palette-dusk" {...props} />;
}

export default ObIconsPaletteDusk;
