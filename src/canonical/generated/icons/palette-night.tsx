import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPaletteNight(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/palette-night" {...props} />;
}

export default ObIconsPaletteNight;
