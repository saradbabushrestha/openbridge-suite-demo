import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsComRadio(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/com-radio" {...props} />;
}

export default ObIconsComRadio;
