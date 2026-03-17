import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsManualOnly(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/manual-only" {...props} />;
}

export default ObIconsManualOnly;
