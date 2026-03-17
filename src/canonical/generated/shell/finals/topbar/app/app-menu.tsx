import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../../../../runtime/openbridgeRegistry';

export function ObShellFinalsTopbarAppAppMenu(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="shell/finals/topbar/app/app-menu" {...props} />;
}

export default ObShellFinalsTopbarAppAppMenu;
