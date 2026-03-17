import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsHelp(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/help" {...props} />;
}

export default ObIconsHelp;
