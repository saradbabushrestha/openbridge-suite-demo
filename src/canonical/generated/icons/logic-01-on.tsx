import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLogic01On(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/logic-01-on" {...props} />;
}

export default ObIconsLogic01On;
