import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlarmBadge(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alarm-badge" {...props} />;
}

export default ObIconsAlarmBadge;
