import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../lib/cn';
const panelStyle = {
    background: 'linear-gradient(180deg, #1c2330 0%, #111722 100%)',
    border: '1px solid #364053',
    borderRadius: 10,
    padding: 12,
    color: '#f7f7f7',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
};
const headRowStyle = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 10,
};
const titleStyle = {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: '#d9dee7',
};
const subtitleStyle = {
    fontSize: 12,
    color: '#8da0bf',
    marginTop: 2,
};
const footerStyle = {
    marginTop: 10,
    fontSize: 12,
    color: '#8da0bf',
};
export function OpenBridgeFrame({ title, subtitle, footer, rightAdornment, className, style, children }) {
    return (_jsxs("section", { className: cn('ob-frame', className), style: { ...panelStyle, ...style }, children: [(title || subtitle || rightAdornment) ? (_jsxs("header", { style: headRowStyle, children: [_jsxs("div", { children: [title ? _jsx("div", { style: titleStyle, children: title }) : null, subtitle ? _jsx("div", { style: subtitleStyle, children: subtitle }) : null] }), rightAdornment ? _jsx("div", { children: rightAdornment }) : null] })) : null, _jsx("div", { children: children }), footer ? _jsx("footer", { style: footerStyle, children: footer }) : null] }));
}
export default OpenBridgeFrame;
