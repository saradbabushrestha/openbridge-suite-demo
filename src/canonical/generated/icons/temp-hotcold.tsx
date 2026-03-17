import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTempHotcold(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/temp-hotcold" {...props} />;
}

export default ObIconsTempHotcold;
