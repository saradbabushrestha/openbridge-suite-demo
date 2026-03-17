import * as React from 'react';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type BrillianceMenuProps = { compact?: boolean; title?: string; };
export function BrillianceMenu({ compact=false, title='Brilliance' }: BrillianceMenuProps) { const asset = compact ? 'shell/finals/topbar/brilliance-menu/options-condenced' : 'shell/finals/topbar/brilliance-menu/options-brilliance-and-palette'; return <OpenBridgeFrame title={title} subtitle={compact ? 'compact' : 'full'}><OpenBridgeCanonicalAsset asset={asset} responsive width='100%' title={title} /></OpenBridgeFrame>; }
export default BrillianceMenu;
