import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTempCold(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/temp-cold" {...props} />;
}

export default ObIconsTempCold;
