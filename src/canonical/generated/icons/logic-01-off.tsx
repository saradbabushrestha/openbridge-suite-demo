import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLogic01Off(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/logic-01-off" {...props} />;
}

export default ObIconsLogic01Off;
