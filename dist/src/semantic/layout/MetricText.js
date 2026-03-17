import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function MetricText({ value, unit, secondary, align = 'center' }) {
    return (_jsxs("div", { style: { textAlign: align }, children: [value != null ? (_jsxs("div", { style: { display: 'flex', alignItems: 'baseline', justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center', gap: 6 }, children: [_jsx("span", { style: { fontSize: 30, fontWeight: 700, lineHeight: 1, color: '#f7f7f7' }, children: value }), unit != null ? _jsx("span", { style: { fontSize: 14, color: '#8da0bf' }, children: unit }) : null] })) : null, secondary != null ? _jsx("div", { style: { marginTop: 4, fontSize: 12, color: '#8da0bf' }, children: secondary }) : null] }));
}
export default MetricText;
