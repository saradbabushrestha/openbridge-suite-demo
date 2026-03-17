import { jsx as _jsx } from "react/jsx-runtime";
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
export function BrillianceMenu({ compact = false, title = 'Brilliance' }) { const asset = compact ? 'shell/finals/topbar/brilliance-menu/options-condenced' : 'shell/finals/topbar/brilliance-menu/options-brilliance-and-palette'; return _jsx(OpenBridgeFrame, { title: title, subtitle: compact ? 'compact' : 'full', children: _jsx(OpenBridgeCanonicalAsset, { asset: asset, responsive: true, width: '100%', title: title }) }); }
export default BrillianceMenu;
