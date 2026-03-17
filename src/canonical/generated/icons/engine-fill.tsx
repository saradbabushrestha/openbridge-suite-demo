import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEngineFill(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/engine-fill" {...props} />;
}

export default ObIconsEngineFill;
