import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsApplications(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/applications" {...props} />;
}

export default ObIconsApplications;
