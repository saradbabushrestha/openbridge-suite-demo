import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWarningUnacknowledgedIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/warning-unacknowledged-iec" {...props} />;
}

export default ObIconsWarningUnacknowledgedIec;
