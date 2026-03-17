import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSoundMuted(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/sound-muted" {...props} />;
}

export default ObIconsSoundMuted;
