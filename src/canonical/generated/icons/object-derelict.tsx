import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsObjectDerelict(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/object-derelict" {...props} />;
}

export default ObIconsObjectDerelict;
