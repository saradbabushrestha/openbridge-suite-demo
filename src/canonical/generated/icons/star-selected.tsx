import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsStarSelected(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/star-selected" {...props} />;
}

export default ObIconsStarSelected;
