import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBlowerOnHorizontal(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/blower-on-horizontal" {...props} />;
}

export default ObIconsBlowerOnHorizontal;
