import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSpeakerOff(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/speaker-off" {...props} />;
}

export default ObIconsSpeakerOff;
