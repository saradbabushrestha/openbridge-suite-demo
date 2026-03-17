import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGenericLineStraight(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/generic-line-straight" {...props} />;
}

export default ObIconsGenericLineStraight;
