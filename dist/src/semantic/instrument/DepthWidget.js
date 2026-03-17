import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
const assetMap = { regular: 'navigation/finals/conning/depth/depth-actual/type-regular-style-regular', shallow: 'navigation/finals/conning/depth/depth-actual/type-shallow-style-regular', deep: 'navigation/finals/conning/depth/depth-actual/type-deep-style-enhanced', prediction: 'navigation/finals/conning/depth/style-vessel-scale-depth-type-prediction', scanned: 'navigation/finals/conning/depth/style-vessel-scale-depth-type-scanned' };
export function DepthWidget({ variant = 'regular', title = 'Depth', depth = 12.4, unit = 'm' }) { return _jsx(OpenBridgeFrame, { title: title, subtitle: variant, children: _jsxs("div", { style: { display: 'grid', gap: 10, placeItems: 'center' }, children: [_jsx(OpenBridgeCanonicalAsset, { asset: assetMap[variant], responsive: true, width: '100%', title: title }), _jsx(MetricText, { value: depth, unit: unit, secondary: 'Under keel reference' })] }) }); }
export default DepthWidget;
