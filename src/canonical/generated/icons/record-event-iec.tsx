import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsRecordEventIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/record-event-iec" {...props} />;
}

export default ObIconsRecordEventIec;
