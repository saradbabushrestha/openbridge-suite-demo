import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlertList(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alert-list" {...props} />;
}

export default ObIconsAlertList;
