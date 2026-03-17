import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCommandAutopilot(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/command-autopilot" {...props} />;
}

export default ObIconsCommandAutopilot;
