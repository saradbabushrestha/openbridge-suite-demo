import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TopBarShell } from '../shell/TopBarShell';
import { NavigationRail } from '../shell/NavigationRail';
import { AppMenu } from '../shell/AppMenu';
import { SystemMenu } from '../shell/SystemMenu';
import { UserMenu } from '../shell/UserMenu';
import { CommandMenu } from '../shell/CommandMenu';
import { OpenBridgeGrid } from '../layout/OpenBridgeGrid';
export function BridgeShellDemo() {
    return (_jsxs("div", { style: { display: 'grid', gap: 12 }, children: [_jsx(TopBarShell, { layout: 'wide-rail', title: 'Bridge workspace', subtitle: 'Semantic shell demo', notificationCount: 4, pinnedApps: true }), _jsxs(OpenBridgeGrid, { minColumn: 280, children: [_jsx(NavigationRail, { mode: 'rail-labeled', behavior: 'flyout-expanded', caption: 'Directly backed by extracted rail assets.' }), _jsx(AppMenu, { expanded: true, size: 'large', footer: 'Small and large variants are wired.' }), _jsx(SystemMenu, { condensed: false, wifi: true, audio: true, microphone: true }), _jsx(UserMenu, { state: 'signed-in', size: 'regular', subtitle: 'Signed in state wrapper' }), _jsx(CommandMenu, { variant: 'propulsion-command', footer: 'Command-specific semantic alias.' })] })] }));
}
export default BridgeShellDemo;
