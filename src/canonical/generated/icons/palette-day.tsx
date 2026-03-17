import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPaletteDay(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/palette-day" {...props} />;
}

export default ObIconsPaletteDay;
