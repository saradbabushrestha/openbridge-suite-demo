import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouter2Off(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/router-2-off" {...props} />;
}

export default ObIconsRouter2Off;
