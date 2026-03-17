import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsManual(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/manual" {...props} />;
}

export default ObIconsManual;
