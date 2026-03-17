import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDuctStraight(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/duct-straight" {...props} />;
}

export default ObIconsDuctStraight;
