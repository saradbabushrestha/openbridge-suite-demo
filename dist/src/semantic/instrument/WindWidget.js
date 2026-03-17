import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HistogramRegular from '../../../instrument/src/components/environment/wind/type-histogram-priority-regular';
import HistogramEnhanced from '../../../instrument/src/components/environment/wind/type-histogram-priority-enhanced';
import DirectionRegular from '../../../instrument/src/components/environment/wind/type-wind-direction-priority-regular';
import DirectionEnhanced from '../../../instrument/src/components/environment/wind/type-wind-direction-priority-enhanced';
import ForceRegular from '../../../instrument/src/components/environment/wind/type-wind-force-priority-regular';
import ForceEnhanced from '../../../instrument/src/components/environment/wind/type-wind-force-priority-enhanced';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
const map = {
    histogram: { regular: HistogramRegular, enhanced: HistogramEnhanced },
    direction: { regular: DirectionRegular, enhanced: DirectionEnhanced },
    force: { regular: ForceRegular, enhanced: ForceEnhanced },
};
export function WindWidget({ mode = 'direction', priority = 'enhanced', value = 17, unit = mode === 'direction' ? '°' : 'kn', title = 'Wind', secondary = 'Relative wind' }) {
    const Asset = map[mode][priority];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: `${mode} · ${priority}`, children: _jsxs("div", { style: { display: 'grid', placeItems: 'center', gap: 10 }, children: [_jsx(Asset, { responsive: true, width: '100%', title: title }), _jsx(MetricText, { value: value, unit: unit, secondary: secondary })] }) }));
}
export default WindWidget;
