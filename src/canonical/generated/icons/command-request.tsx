import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandRequest(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-request" {...props} />;
}

export default ObIconsCommandRequest;
