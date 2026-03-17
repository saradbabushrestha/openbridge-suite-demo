import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsPipeComingFrom(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/pipe-coming-from" {...props} />;
}

export default ObIconsPipeComingFrom;
