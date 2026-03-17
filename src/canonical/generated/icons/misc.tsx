import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMisc(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/misc" {...props} />;
}

export default ObIconsMisc;
