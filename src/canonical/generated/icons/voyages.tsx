import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsVoyages(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/voyages" {...props} />;
}

export default ObIconsVoyages;
