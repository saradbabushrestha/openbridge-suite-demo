import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsLogoOpenbridge(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/logo-openbridge" {...props} />;
}

export default ObIconsLogoOpenbridge;
