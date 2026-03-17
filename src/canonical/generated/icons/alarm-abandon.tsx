import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlarmAbandon(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alarm-abandon" {...props} />;
}

export default ObIconsAlarmAbandon;
