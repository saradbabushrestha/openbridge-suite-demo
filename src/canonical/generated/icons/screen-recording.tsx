import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsScreenRecording(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/screen-recording" {...props} />;
}

export default ObIconsScreenRecording;
