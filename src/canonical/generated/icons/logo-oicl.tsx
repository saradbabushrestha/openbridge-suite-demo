import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLogoOicl(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/logo-oicl" {...props} />;
}

export default ObIconsLogoOicl;
