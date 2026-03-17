import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../../runtime/openbridgeRegistry';

export function ObShellFinalsTopbarAppAppButton(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="shell/finals/topbar/app/app-button" {...props} />;
}

export default ObShellFinalsTopbarAppAppButton;
