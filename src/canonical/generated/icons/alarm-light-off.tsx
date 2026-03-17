import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlarmLightOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alarm-light-off" {...props} />;
}

export default ObIconsAlarmLightOff;
