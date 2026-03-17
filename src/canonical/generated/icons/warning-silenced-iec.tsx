import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWarningSilencedIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/warning-silenced-iec" {...props} />;
}

export default ObIconsWarningSilencedIec;
