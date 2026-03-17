import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSources01(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sources-01" {...props} />;
}

export default ObIconsSources01;
