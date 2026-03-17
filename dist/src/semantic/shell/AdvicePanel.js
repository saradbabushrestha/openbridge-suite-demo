import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
export function AdvicePanel({ title = 'Advice', messages = ['Reduce speed in turn area', 'Prepare shallow-water response'] }) { return _jsx(OpenBridgeFrame, { title: title, subtitle: 'semantic advice panel', children: _jsxs("div", { style: { display: 'grid', gap: 10 }, children: [_jsx(OpenBridgeCanonicalAsset, { asset: 'shell/finals/messaging/advice/advice-menu', responsive: true, width: '100%', title: title }), _jsx("ul", { style: { margin: 0, paddingLeft: 18, color: '#d9dee7' }, children: messages.map((msg, idx) => _jsx("li", { style: { margin: '2px 0' }, children: msg }, idx)) })] }) }); }
export default AdvicePanel;
