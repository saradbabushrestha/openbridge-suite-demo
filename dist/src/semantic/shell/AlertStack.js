import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../lib/cn';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
const menuAsset = { notification: 'shell/finals/messaging/notification/notification-menu', advice: 'shell/finals/messaging/advice/advice-menu' };
export function AlertStack({ items, className }) { const kind = items[0]?.kind ?? 'notification'; return _jsxs("section", { className: cn('ob-alert-stack', className), style: { display: 'grid', gap: 12 }, children: [_jsx(OpenBridgeCanonicalAsset, { asset: menuAsset[kind], responsive: true, width: '100%', title: 'Alert stack' }), _jsx("div", { style: { display: 'grid', gap: 8 }, children: items.map((item, idx) => _jsxs("article", { style: { border: '1px solid #364053', borderRadius: 8, padding: 10, background: '#111722', color: '#f7f7f7' }, children: [_jsx("div", { style: { fontSize: 13, fontWeight: 700 }, children: item.title }), item.detail ? _jsx("div", { style: { fontSize: 12, color: '#9aa8bf', marginTop: 4 }, children: item.detail }) : null] }, idx)) })] }); }
export default AlertStack;
