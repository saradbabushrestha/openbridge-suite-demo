import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGenerator(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/generator" {...props} />;
}

export default ObIconsGenerator;
