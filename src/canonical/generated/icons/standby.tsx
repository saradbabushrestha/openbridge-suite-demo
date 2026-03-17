import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsStandby(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/standby" {...props} />;
}

export default ObIconsStandby;
