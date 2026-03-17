import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsConspicuousCairn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/conspicuous-cairn" {...props} />;
}

export default ObIconsConspicuousCairn;
