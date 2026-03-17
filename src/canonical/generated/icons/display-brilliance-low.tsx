import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDisplayBrillianceLow(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/display-brilliance-low" {...props} />;
}

export default ObIconsDisplayBrillianceLow;
