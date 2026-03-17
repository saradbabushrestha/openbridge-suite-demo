import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsNotification(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/notification" {...props} />;
}

export default ObIconsNotification;
