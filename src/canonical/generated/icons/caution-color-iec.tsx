import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCautionColorIec(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/caution-color-iec" {...props} />;
}

export default ObIconsCautionColorIec;
