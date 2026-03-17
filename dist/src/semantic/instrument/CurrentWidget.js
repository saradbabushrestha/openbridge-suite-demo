import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
const assetMap = { direction: { regular: 'environment/finals/conditions/wind/current/type-direction-priority-regular', enhanced: 'environment/finals/conditions/wind/current/type-direction-priority-enhanced' }, vessel: { regular: 'environment/finals/conditions/wind/current/type-vessel-priority-regular', enhanced: 'environment/finals/conditions/wind/current/type-vessel-priority-enhanced' } };
export function CurrentWidget({ variant = 'direction', priority = 'regular', title = 'Current', speed = 1.3, unit = 'kt' }) { return _jsx(OpenBridgeFrame, { title: title, subtitle: `${variant} · ${priority}`, children: _jsxs("div", { style: { display: 'grid', gap: 10, placeItems: 'center' }, children: [_jsx(OpenBridgeCanonicalAsset, { asset: assetMap[variant][priority], responsive: true, width: '100%', title: title }), _jsx(MetricText, { value: speed, unit: unit, secondary: 'Set and drift' })] }) }); }
export default CurrentWidget;
