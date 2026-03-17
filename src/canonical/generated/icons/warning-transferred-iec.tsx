import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWarningTransferredIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/warning-transferred-iec" {...props} />;
}

export default ObIconsWarningTransferredIec;
