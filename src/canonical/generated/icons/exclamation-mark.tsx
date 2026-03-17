import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsExclamationMark(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/exclamation-mark" {...props} />;
}

export default ObIconsExclamationMark;
