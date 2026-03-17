import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLightAlarm(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/light-alarm" {...props} />;
}

export default ObIconsLightAlarm;
