import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsUser(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/user" {...props} />;
}

export default ObIconsUser;
