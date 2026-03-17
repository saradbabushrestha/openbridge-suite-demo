import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsAntennaOn(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/antenna-on" {...props} />;
}

export default ObIconsAntennaOn;
