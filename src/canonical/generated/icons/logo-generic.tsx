import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLogoGeneric(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/logo-generic" {...props} />;
}

export default ObIconsLogoGeneric;
