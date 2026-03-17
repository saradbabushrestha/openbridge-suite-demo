import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsMediaRecord(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/media-record" {...props} />;
}

export default ObIconsMediaRecord;
