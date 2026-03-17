import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsGenericLineComingFrom(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/generic-line-coming-from" {...props} />;
}

export default ObIconsGenericLineComingFrom;
