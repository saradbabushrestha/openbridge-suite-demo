import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCoordinate(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/coordinate" {...props} />;
}

export default ObIconsCoordinate;
