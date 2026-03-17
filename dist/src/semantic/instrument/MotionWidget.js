import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SurgeSwayYaw from '../../../instrument/src/components/motion/motion-control/surge-sway-yaw';
import DraftTrim from '../../../instrument/src/components/motion/motion-control/draft-trim';
import Slamming from '../../../instrument/src/components/motion/forces/slamming';
import Vibrations from '../../../instrument/src/components/motion/forces/vibrations';
import Heave from '../../../instrument/src/components/motion/6-dof/heave';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
const map = {
    'surge-sway-yaw': SurgeSwayYaw,
    'draft-trim': DraftTrim,
    slamming: Slamming,
    vibrations: Vibrations,
    heave: Heave,
};
export function MotionWidget({ mode = 'heave', value = 0.7, unit = 'm', title = 'Motion' }) {
    const Asset = map[mode];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: mode, children: _jsxs("div", { style: { display: 'grid', placeItems: 'center', gap: 10 }, children: [_jsx(Asset, { responsive: true, width: '100%', title: title }), _jsx(MetricText, { value: value, unit: unit, secondary: 'Observed motion' })] }) }));
}
export default MotionWidget;
