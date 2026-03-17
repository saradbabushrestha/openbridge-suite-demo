import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSoundNo(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sound-no" {...props} />;
}

export default ObIconsSoundNo;
