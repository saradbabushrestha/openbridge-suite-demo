import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsCheckboxCheckedFilled(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/checkbox-checked-filled" {...props} />;
}

export default ObIconsCheckboxCheckedFilled;
