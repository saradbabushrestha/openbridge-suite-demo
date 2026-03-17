import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCheckMixed(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/check-mixed" {...props} />;
}

export default ObIconsCheckMixed;
