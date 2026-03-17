import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsSpeaker(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/speaker" {...props} />;
}

export default ObIconsSpeaker;
