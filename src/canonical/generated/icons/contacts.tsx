import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsContacts(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/contacts" {...props} />;
}

export default ObIconsContacts;
