import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPushButtonOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/push-button-off" {...props} />;
}

export default ObIconsPushButtonOff;
