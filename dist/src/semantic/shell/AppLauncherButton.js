import { jsx as _jsx } from "react/jsx-runtime";
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
import { cn } from '../../lib/cn';
export function AppLauncherButton({ pinned = false, className, title = 'Applications', size = 48, onClick }) { const asset = pinned ? 'shell/finals/topbar/app/app-button/type-pinned-apps' : 'shell/finals/topbar/app/app-button/type-regular'; return _jsx("button", { type: 'button', "aria-label": title, title: title, onClick: onClick, className: cn('ob-app-launcher-button', className), style: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }, children: _jsx(OpenBridgeCanonicalAsset, { asset: asset, size: size, title: title }) }); }
export default AppLauncherButton;
