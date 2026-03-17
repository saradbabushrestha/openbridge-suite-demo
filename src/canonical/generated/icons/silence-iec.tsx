import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSilenceIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/silence-iec" {...props} />;
}

export default ObIconsSilenceIec;
