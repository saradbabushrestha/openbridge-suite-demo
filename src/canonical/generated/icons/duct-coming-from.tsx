import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDuctComingFrom(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/duct-coming-from" {...props} />;
}

export default ObIconsDuctComingFrom;
