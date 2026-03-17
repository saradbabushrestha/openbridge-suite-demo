import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRecordEvent(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/record-event" {...props} />;
}

export default ObIconsRecordEvent;
