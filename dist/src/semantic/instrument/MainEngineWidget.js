import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BarPowerRegularActive from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-active';
import BarPowerRegularInput from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-input';
import BarPowerRegularReady from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-ready';
import BarPowerRegularLoading from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-loading';
import BarPowerRegularOff from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-off';
import BarPowerCommandActive from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-active';
import BarPowerCommandInput from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-input';
import BarPowerCommandReady from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-ready';
import BarPowerCommandLoading from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-loading';
import BarPowerCommandOff from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-off';
import PropPitchRegularActive from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-active';
import PropPitchRegularInput from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-input';
import PropPitchRegularReady from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-ready';
import PropPitchRegularLoading from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-loading';
import PropPitchRegularOff from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-off';
import PropPitchCommandActive from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-active';
import PropPitchCommandInput from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-input';
import PropPitchCommandReady from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-ready';
import PropPitchCommandLoading from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-loading';
import PropPitchCommandOff from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-off';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
const map = {
    regular: {
        bar: { active: BarPowerRegularActive, input: BarPowerRegularInput, ready: BarPowerRegularReady, loading: BarPowerRegularLoading, off: BarPowerRegularOff },
        propellar: { active: PropPitchRegularActive, input: PropPitchRegularInput, ready: PropPitchRegularReady, loading: PropPitchRegularLoading, off: PropPitchRegularOff },
    },
    'in-command': {
        bar: { active: BarPowerCommandActive, input: BarPowerCommandInput, ready: BarPowerCommandReady, loading: BarPowerCommandLoading, off: BarPowerCommandOff },
        propellar: { active: PropPitchCommandActive, input: PropPitchCommandInput, ready: PropPitchCommandReady, loading: PropPitchCommandLoading, off: PropPitchCommandOff },
    },
};
export function MainEngineWidget({ priority = 'regular', styleMode = 'bar', state = 'active', value = 78, unit = '% MCR', title = 'Main engine' }) {
    const Asset = map[priority][styleMode][state];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: `${priority} · ${styleMode} · ${state}`, children: _jsxs("div", { style: { display: 'grid', placeItems: 'center', gap: 10 }, children: [_jsx(Asset, { responsive: true, width: '100%', title: title }), _jsx(MetricText, { value: value, unit: unit, secondary: styleMode === 'bar' ? 'Power' : 'Pitch / RPM' })] }) }));
}
export default MainEngineWidget;
