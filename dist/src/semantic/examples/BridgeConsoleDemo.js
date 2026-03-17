import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TopBarShell } from '../shell/TopBarShell';
import { NavigationRail } from '../shell/NavigationRail';
import { CompassWidget } from '../instrument/CompassWidget';
import { HeadingWidget } from '../instrument/HeadingWidget';
import { SpeedWidget } from '../instrument/SpeedWidget';
import { WindWidget } from '../instrument/WindWidget';
import { RudderWidget } from '../instrument/RudderWidget';
import { MainEngineWidget } from '../instrument/MainEngineWidget';
import { ReadoutWidget } from '../instrument/ReadoutWidget';
export function BridgeConsoleDemo() {
    return (_jsxs("div", { style: { display: 'grid', gap: 12, background: '#0a111c', padding: 12 }, children: [_jsx(TopBarShell, { layout: 'wide-rail', title: 'OpenBridge bridge console', subtitle: 'Composed from extracted assets + semantic wrappers', notificationCount: 5, pinnedApps: true }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'minmax(240px, 320px) 1fr', gap: 12 }, children: [_jsx(NavigationRail, { mode: 'rail-labeled', behavior: 'flyout-expanded', caption: 'Shell navigation rail' }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))', gap: 12 }, children: [_jsx(CompassWidget, { variant: 'radial', advice: 'optimal', heading: 187, target: 'Waypoint 192\u00B0' }), _jsx(HeadingWidget, { variant: 'conning', heading: 185.4 }), _jsx(SpeedWidget, { variant: 'conning', speed: 12.8 }), _jsx(WindWidget, { mode: 'direction', priority: 'enhanced', value: 17, unit: '\u00B0' }), _jsx(RudderWidget, { priority: 'regular', styleMode: 'rudder', state: 'active', angle: 12 }), _jsx(MainEngineWidget, { priority: 'regular', styleMode: 'bar', state: 'active', value: 78, unit: '% MCR' }), _jsx(ReadoutWidget, { size: 'regular', alignment: 'left', priority: 'enhanced', value: 23.4, unit: 'm' })] })] })] }));
}
export default BridgeConsoleDemo;
