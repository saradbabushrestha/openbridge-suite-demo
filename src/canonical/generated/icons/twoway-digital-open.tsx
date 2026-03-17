import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsTwowayDigitalOpen(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/twoway-digital-open" {...props} />;
}

export default ObIconsTwowayDigitalOpen;
