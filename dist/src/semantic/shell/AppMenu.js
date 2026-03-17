import { jsx as _jsx } from "react/jsx-runtime";
import CollapsedSmall from '../../../shell/src/components/top-bar/app/app-menu/expand-false-size-small';
import CollapsedLarge from '../../../shell/src/components/top-bar/app/app-menu/expand-false-size-large';
import ExpandedSmall from '../../../shell/src/components/top-bar/app/app-menu/expand-true-size-small';
import ExpandedLarge from '../../../shell/src/components/top-bar/app/app-menu/expand-true-size-large';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
const map = {
    small: { false: CollapsedSmall, true: ExpandedSmall },
    large: { false: CollapsedLarge, true: ExpandedLarge },
};
export function AppMenu({ expanded = false, size = 'large', title = 'App menu', footer }) {
    const Asset = map[size][String(expanded)];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: `${size} · ${expanded ? 'expanded' : 'collapsed'}`, footer: footer, children: _jsx(Asset, { responsive: true, width: '100%', title: title }) }));
}
export default AppMenu;
