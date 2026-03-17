import { jsx as _jsx } from "react/jsx-runtime";
export function OpenBridgeGrid({ minColumn = 260, gap = 12, children, style }) {
    return (_jsx("div", { style: {
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(${minColumn}px, 1fr))`,
            gap,
            ...style,
        }, children: children }));
}
export default OpenBridgeGrid;
