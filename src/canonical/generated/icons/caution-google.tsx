import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCautionGoogle(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/caution-google" {...props} />;
}

export default ObIconsCautionGoogle;
