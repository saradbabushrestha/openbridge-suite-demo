import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAlertEmpty(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/alert-empty" {...props} />;
}

export default ObIconsAlertEmpty;
