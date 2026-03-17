import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTwowayDigitalStatic(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/twoway-digital-static" {...props} />;
}

export default ObIconsTwowayDigitalStatic;
