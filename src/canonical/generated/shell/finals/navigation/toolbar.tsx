import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../runtime/openbridgeRegistry';

export function ObShellFinalsNavigationToolbar(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="shell/finals/navigation/toolbar" {...props} />;
}

export default ObShellFinalsNavigationToolbar;
