import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ConningHeading from '../../../instrument/src/components/indicators/conning/conning-heading';
import RadialAdvice from '../../../instrument/src/components/building-blocks/heading/config-heading-radial-advice';
import RadialOptimal from '../../../instrument/src/components/building-blocks/heading/config-heading-radial-advice-optimal';
import RadialDanger from '../../../instrument/src/components/building-blocks/heading/config-heading-radial-advice-danger';
import ArcAdvice from '../../../instrument/src/components/building-blocks/heading/config-heading-arc-advice';
import ArcOptimal from '../../../instrument/src/components/building-blocks/heading/config-heading-arc-advice-optimal';
import ArcDanger from '../../../instrument/src/components/building-blocks/heading/config-heading-arc-advice-danger';
import LinearAdvice from '../../../instrument/src/components/building-blocks/heading/config-heading-linear-advice';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
const map = {
    conning: { regular: ConningHeading, optimal: ConningHeading, danger: ConningHeading },
    radial: { regular: RadialAdvice, optimal: RadialOptimal, danger: RadialDanger },
    arc: { regular: ArcAdvice, optimal: ArcOptimal, danger: ArcDanger },
    linear: { regular: LinearAdvice, optimal: LinearAdvice, danger: LinearAdvice },
};
export function HeadingWidget({ variant = 'conning', advice = 'regular', heading = 185.4, target = 'Setpoint 190°', title = 'Heading' }) {
    const Asset = map[variant][advice];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: `${variant} · ${advice}`, footer: target, children: _jsxs("div", { style: { display: 'grid', placeItems: 'center', gap: 10 }, children: [_jsx(Asset, { responsive: true, width: '100%', title: title }), _jsx(MetricText, { value: heading, unit: '\u00B0', secondary: 'Gyro / true' })] }) }));
}
export default HeadingWidget;
