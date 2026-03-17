import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDuty(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/duty" {...props} />;
}

export default ObIconsDuty;
