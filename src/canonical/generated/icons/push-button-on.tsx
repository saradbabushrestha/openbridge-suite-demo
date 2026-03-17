import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPushButtonOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/push-button-on" {...props} />;
}

export default ObIconsPushButtonOn;
