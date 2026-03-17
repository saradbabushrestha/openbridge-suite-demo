import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTwowayStackedOpen(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/twoway-stacked-open" {...props} />;
}

export default ObIconsTwowayStackedOpen;
