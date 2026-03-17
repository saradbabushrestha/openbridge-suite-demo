import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRouter2On(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/router-2-on" {...props} />;
}

export default ObIconsRouter2On;
