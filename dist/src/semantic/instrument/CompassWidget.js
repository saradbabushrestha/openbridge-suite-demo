import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ConningCompass from '../../../instrument/src/components/indicators/conning/conning-compass';
import RadialAdvice from '../../../instrument/src/components/building-blocks/compass/config-compass-radial-advice';
import RadialOptimal from '../../../instrument/src/components/building-blocks/compass/config-compass-radial-advice-optimal';
import RadialDanger from '../../../instrument/src/components/building-blocks/compass/config-compass-radial-advice-danger';
import ArcAdvice from '../../../instrument/src/components/building-blocks/compass/config-compass-arc-advice';
import ArcOptimal from '../../../instrument/src/components/building-blocks/compass/config-compass-arc-advice-optimal';
import ArcDanger from '../../../instrument/src/components/building-blocks/compass/config-compass-arc-advice-danger';
import LinearAdvice from '../../../instrument/src/components/building-blocks/compass/config-compass-linear-advice';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
const map = {
    conning: { regular: ConningCompass, optimal: ConningCompass, danger: ConningCompass },
    radial: { regular: RadialAdvice, optimal: RadialOptimal, danger: RadialDanger },
    arc: { regular: ArcAdvice, optimal: ArcOptimal, danger: ArcDanger },
    linear: { regular: LinearAdvice, optimal: LinearAdvice, danger: LinearAdvice },
};
export function CompassWidget({ variant = 'conning', advice = 'regular', heading = 187, target = 'Target 192°', title = 'Compass' }) {
    const Asset = map[variant][advice];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: `${variant} · ${advice}`, footer: target, children: _jsxs("div", { style: { display: 'grid', placeItems: 'center', gap: 10 }, children: [_jsx(Asset, { responsive: true, width: '100%', title: title }), _jsx(MetricText, { value: heading, unit: '\u00B0', secondary: 'Heading reference' })] }) }));
}
export default CompassWidget;
