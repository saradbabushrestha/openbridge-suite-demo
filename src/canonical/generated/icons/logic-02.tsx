import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLogic02(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/logic-02" {...props} />;
}

export default ObIconsLogic02;
