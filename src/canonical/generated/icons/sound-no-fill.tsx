import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSoundNoFill(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sound-no-fill" {...props} />;
}

export default ObIconsSoundNoFill;
