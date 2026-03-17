import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsComRadioEmergency(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/com-radio-emergency" {...props} />;
}

export default ObIconsComRadioEmergency;
