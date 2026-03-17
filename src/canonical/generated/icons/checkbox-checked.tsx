import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCheckboxChecked(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/checkbox-checked" {...props} />;
}

export default ObIconsCheckboxChecked;
