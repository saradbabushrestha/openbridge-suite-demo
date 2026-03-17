import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTextIcon(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/text-icon" {...props} />;
}

export default ObIconsTextIcon;
