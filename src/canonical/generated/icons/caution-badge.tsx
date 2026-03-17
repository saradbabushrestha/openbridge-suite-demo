import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCautionBadge(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/caution-badge" {...props} />;
}

export default ObIconsCautionBadge;
