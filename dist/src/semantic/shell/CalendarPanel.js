import { jsx as _jsx } from "react/jsx-runtime";
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
export function CalendarPanel({ title = 'Calendar', variant = 'event' }) { const asset = variant === 'event' ? 'shell/finals/topbar/building-block-calendar/event-item/state-enabled-type-single-line' : 'shell/finals/topbar/building-block-calendar/date-item/size-large-type-enhanced-state-enabled'; return _jsx(OpenBridgeFrame, { title: title, subtitle: variant, children: _jsx(OpenBridgeCanonicalAsset, { asset: asset, responsive: true, width: '100%', title: title }) }); }
export default CalendarPanel;
