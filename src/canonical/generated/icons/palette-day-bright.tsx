import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPaletteDayBright(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/palette-day-bright" {...props} />;
}

export default ObIconsPaletteDayBright;
