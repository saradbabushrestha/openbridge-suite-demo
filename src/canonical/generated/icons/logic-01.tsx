import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLogic01(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/logic-01" {...props} />;
}

export default ObIconsLogic01;
