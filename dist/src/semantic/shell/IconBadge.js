import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
export function IconBadge({ icon, label, size = 24 }) { const asset = icon.startsWith('icons/') ? icon : `icons/${icon}`; return _jsxs("span", { style: { display: 'inline-flex', alignItems: 'center', gap: 8, color: '#d9dee7' }, children: [_jsx(OpenBridgeCanonicalAsset, { asset: asset, size: size, title: label || asset }), label ? _jsx("span", { children: label }) : null] }); }
export default IconBadge;
