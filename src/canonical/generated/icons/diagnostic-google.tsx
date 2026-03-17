import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../../runtime/openbridgeCanonicalRegistry';
import type { OpenBridgeAssetProps } from '../../../runtime/openbridgeRegistry';

export function ObIconsDiagnosticGoogle(props: OpenBridgeAssetProps) {
  return <OpenBridgeCanonicalAsset asset="icons/diagnostic-google" {...props} />;
}

export default ObIconsDiagnosticGoogle;
