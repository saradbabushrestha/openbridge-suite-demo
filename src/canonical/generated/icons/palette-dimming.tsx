import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPaletteDimming(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/palette-dimming" {...props} />;
}

export default ObIconsPaletteDimming;
