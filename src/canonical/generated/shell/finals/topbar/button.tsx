import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../runtime/openbridgeRegistry';

export function ObShellFinalsTopbarButton(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="shell/finals/topbar/button" {...props} />;
}

export default ObShellFinalsTopbarButton;
