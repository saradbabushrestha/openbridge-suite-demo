import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsFishing(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/fishing" {...props} />;
}

export default ObIconsFishing;
