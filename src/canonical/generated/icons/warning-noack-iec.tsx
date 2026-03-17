import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsWarningNoackIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/warning-noack-iec" {...props} />;
}

export default ObIconsWarningNoackIec;
