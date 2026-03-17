import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsJoystick(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/joystick" {...props} />;
}

export default ObIconsJoystick;
