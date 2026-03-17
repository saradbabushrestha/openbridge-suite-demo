import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsComPaList(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/com-pa-list" {...props} />;
}

export default ObIconsComPaList;
