import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandAutoTrack(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-auto-track" {...props} />;
}

export default ObIconsCommandAutoTrack;
