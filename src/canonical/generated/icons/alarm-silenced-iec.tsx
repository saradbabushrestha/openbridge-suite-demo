import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlarmSilencedIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alarm-silenced-iec" {...props} />;
}

export default ObIconsAlarmSilencedIec;
