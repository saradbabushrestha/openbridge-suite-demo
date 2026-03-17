import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ConningSpeed from '../../../instrument/src/components/indicators/conning/conning-speed';
import SpeedRadialAdvice from '../../../instrument/src/components/building-blocks/speed/config-speed-radial-advice';
import SpeedRadialOptimal from '../../../instrument/src/components/building-blocks/speed/config-speed-radial-advice-optimal';
import SpeedRadialDanger from '../../../instrument/src/components/building-blocks/speed/config-speed-radial-advice-danger';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
const map = {
    conning: { regular: ConningSpeed, optimal: ConningSpeed, danger: ConningSpeed },
    radial: { regular: SpeedRadialAdvice, optimal: SpeedRadialOptimal, danger: SpeedRadialDanger },
};
export function SpeedWidget({ variant = 'conning', advice = 'regular', speed = 12.8, title = 'Speed', secondary = 'SOG / knots' }) {
    const Asset = map[variant][advice];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: `${variant} · ${advice}`, children: _jsxs("div", { style: { display: 'grid', placeItems: 'center', gap: 10 }, children: [_jsx(Asset, { responsive: true, width: '100%', title: title }), _jsx(MetricText, { value: speed, unit: 'kn', secondary: secondary })] }) }));
}
export default SpeedWidget;
