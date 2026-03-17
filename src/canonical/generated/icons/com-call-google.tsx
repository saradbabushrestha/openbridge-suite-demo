import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsComCallGoogle(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/com-call-google" {...props} />;
}

export default ObIconsComCallGoogle;
