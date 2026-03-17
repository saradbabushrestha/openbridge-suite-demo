import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsEpms(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/epms" {...props} />;
}

export default ObIconsEpms;
