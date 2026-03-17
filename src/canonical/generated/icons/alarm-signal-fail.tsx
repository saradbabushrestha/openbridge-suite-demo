import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlarmSignalFail(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alarm-signal-fail" {...props} />;
}

export default ObIconsAlarmSignalFail;
