import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsUserProfiles(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/user-profiles" {...props} />;
}

export default ObIconsUserProfiles;
