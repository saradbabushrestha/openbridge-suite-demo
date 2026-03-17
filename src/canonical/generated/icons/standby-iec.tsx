import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsStandbyIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/standby-iec" {...props} />;
}

export default ObIconsStandbyIec;
