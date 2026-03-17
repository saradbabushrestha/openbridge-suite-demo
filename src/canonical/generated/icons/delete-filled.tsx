import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDeleteFilled(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/delete-filled" {...props} />;
}

export default ObIconsDeleteFilled;
