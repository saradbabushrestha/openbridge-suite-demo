import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDatabase(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/database" {...props} />;
}

export default ObIconsDatabase;
