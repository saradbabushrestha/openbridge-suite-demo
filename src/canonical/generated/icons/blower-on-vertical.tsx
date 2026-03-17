import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsBlowerOnVertical(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/blower-on-vertical" {...props} />;
}

export default ObIconsBlowerOnVertical;
